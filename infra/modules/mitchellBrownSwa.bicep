@description('Name of the Azure Static Web App.')
param name string

@description('Azure region for the Static Web App. Usually the resource group location.')
param location string

@description('SKU name for the Static Web App.')
@allowed([
  'Free'
  'Standard'
])
param skuName string = 'Free'

@description('Whether staging environments are enabled for this Static Web App.')
@allowed([
  'Enabled'
  'Disabled'
])
param stagingEnvironmentPolicy string = 'Enabled'

@description('Whether public network access is enabled. Allowed values are Enabled, Disabled, or empty string.')
param publicNetworkAccess string = 'Enabled'

@description('Whether config file updates are allowed.')
param allowConfigFileUpdates bool = true

@description('Repository URL (optional). If provided with branch and repositoryToken, the SWA will be configured for GitHub integration.')
param repositoryUrl string = ''

@description('Repository branch (optional). Used with repositoryUrl and repositoryToken.')
param branch string = ''

@secure()
@description('GitHub repository token (optional). Used to generate the GitHub Actions workflow and secrets.')
param repositoryToken string = ''

@description('App location within the repository (optional). Example: "/src/MitchellBrown.WebApp" or "/".')
param appLocation string = ''

@description('API location within the repository (optional). Example: "/api". Leave empty for no API.')
param apiLocation string = ''

@description('Output location of the app build (optional). Example: "dist" or "dist/mitchell-brown".')
param outputLocation string = ''

@description('Custom app build command (optional).')
param appBuildCommand string = ''

@description('Custom API build command (optional).')
param apiBuildCommand string = ''

@description('Skip GitHub Action workflow generation when configuring GitHub integration.')
param skipGithubActionWorkflowGeneration bool = false

@description('Optional override for the GitHub Action secret name.')
param githubActionSecretNameOverride string = ''

var repoIntegrationEnabled = !empty(repositoryUrl) && !empty(branch) && !empty(repositoryToken)

var baseProperties = {
  allowConfigFileUpdates: allowConfigFileUpdates
  publicNetworkAccess: publicNetworkAccess
  stagingEnvironmentPolicy: stagingEnvironmentPolicy
}

var repoProperties = repoIntegrationEnabled ? {
  repositoryUrl: repositoryUrl
  branch: branch
  repositoryToken: repositoryToken
  buildProperties: {
    appLocation: appLocation
    apiLocation: apiLocation
    outputLocation: outputLocation
    appBuildCommand: appBuildCommand
    apiBuildCommand: apiBuildCommand
    skipGithubActionWorkflowGeneration: skipGithubActionWorkflowGeneration
    githubActionSecretNameOverride: empty(githubActionSecretNameOverride) ? null : githubActionSecretNameOverride
  }
} : {}

resource swa 'Microsoft.Web/staticSites@2024-11-01' = {
  name: name
  location: location
  sku: {
    name: skuName
  }
  properties: union(baseProperties, repoProperties)
}

output id string = swa.id
output defaultHostname string = swa.properties.defaultHostname
output contentDistributionEndpoint string = swa.properties.contentDistributionEndpoint
output locationOut string = swa.location
