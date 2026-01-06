@description('Name of the Container App (MitchellBrown.Api).')
param name string

@description('Azure region for the Container App resources. Usually the resource group location.')
param location string

@description('Name of the Container Apps managed environment to create.')
param environmentName string = '${name}-env'

@description('Container image to run (e.g. "myregistry.azurecr.io/mitchellbrown-api:1.0.0").')
param image string

@description('Port the container listens on.')
param containerPort int = 8080

@description('CPU cores for the container. Example: 0.5')
param cpu int = 1

@description('Memory for the container. Example: "2Gi" or "1Gi".')
param memory string = '2Gi'

@description('Minimum number of replicas.')
param minReplicas int = 0

@description('Maximum number of replicas.')
param maxReplicas int = 1

@description('If true, create external ingress for the container app.')
param externalIngress bool = true

@description('Environment variables to set on the container.')
type EnvVar = {
  @description('Environment variable name.')
  name: string

  @description('Non-secret value (leave empty when using secretRef).')
  value: string?

  @description('Name of a Container App secret to use (optional).')
  secretRef: string?
}

param envVars EnvVar[] = [
  {
    name: 'ASPNETCORE_URLS'
    value: 'http://+:${containerPort}'
  }
]

@secure()
@description('Secrets to create in the Container App. Use envVars[].secretRef to reference them.')
type SecretValue = {
  name: string
  value: string
}

param secrets SecretValue[] = []

@description('Optional private registry server (e.g. "myregistry.azurecr.io"). Leave empty for public images.')
param registryServer string = ''

@description('Optional private registry username. Used when registryServer is provided.')
param registryUsername string = ''

@secure()
@description('Optional private registry password. Used when registryServer is provided.')
param registryPassword string = ''

var usePrivateRegistry = !empty(registryServer)

var combinedSecrets = usePrivateRegistry ? union(secrets, [
  {
    name: 'registryPassword'
    value: registryPassword
  }
]) : secrets

resource env 'Microsoft.App/managedEnvironments@2025-01-01' = {
  name: environmentName
  location: location
}

resource app 'Microsoft.App/containerApps@2025-01-01' = {
  name: name
  location: location
  properties: {
    environmentId: env.id
    configuration: {
      activeRevisionsMode: 'Single'
      ingress: externalIngress ? {
        external: true
        targetPort: containerPort
        allowInsecure: false
      } : null
      secrets: combinedSecrets
      registries: usePrivateRegistry ? [
        {
          server: registryServer
          username: registryUsername
          passwordSecretRef: 'registryPassword'
        }
      ] : []
    }
    template: {
      containers: [
        {
          name: 'api'
          image: image
          env: envVars
          resources: {
            cpu: cpu
            memory: memory
          }
        }
      ]
      scale: {
        minReplicas: minReplicas
        maxReplicas: maxReplicas
      }
    }
  }
}

output id string = app.id
output environmentId string = env.id
output latestRevisionFqdn string = app.properties.latestRevisionFqdn
output ingressFqdn string = app.properties.configuration.?ingress.?fqdn ?? ''
