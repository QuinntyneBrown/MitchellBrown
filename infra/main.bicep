targetScope = 'resourceGroup'

@description('Name of the Azure Static Web App.')
param staticWebAppName string = 'mitchell-brown-swa'

@description('Location for the Static Web App.')
param location string = resourceGroup().location

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

module mitchellBrownSwa './modules/mitchellBrownSwa.bicep' = {
  name: 'mitchellBrownSwa'
  params: {
    name: staticWebAppName
    location: location
    skuName: skuName
    stagingEnvironmentPolicy: stagingEnvironmentPolicy
    publicNetworkAccess: publicNetworkAccess
    allowConfigFileUpdates: allowConfigFileUpdates
    repositoryUrl: repositoryUrl
    branch: branch
    repositoryToken: repositoryToken
    appLocation: appLocation
    apiLocation: apiLocation
    outputLocation: outputLocation
    appBuildCommand: appBuildCommand
    apiBuildCommand: apiBuildCommand
    skipGithubActionWorkflowGeneration: skipGithubActionWorkflowGeneration
    githubActionSecretNameOverride: githubActionSecretNameOverride
  }
}

output staticWebAppId string = mitchellBrownSwa.outputs.id
output staticWebAppDefaultHostname string = mitchellBrownSwa.outputs.defaultHostname
output staticWebAppContentDistributionEndpoint string = mitchellBrownSwa.outputs.contentDistributionEndpoint
