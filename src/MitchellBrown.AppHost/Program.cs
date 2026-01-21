// Copyright (c) Quinntyne Brown. All Rights Reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.

using Aspire.Hosting;

// Note: Dashboard is disabled due to workload version mismatch with .NET 9 preview SDK
// Re-enable by changing DisableDashboard to false once Aspire workload is updated
var builder = DistributedApplication.CreateBuilder(new DistributedApplicationOptions { Args = args, DisableDashboard = true });

// Add the API project
var apiService = builder.AddProject("api", "../MitchellBrown.Api/MitchellBrown.Api.csproj")
    .WithExternalHttpEndpoints();

// Add the Angular web app as a Node.js application
var webapp = builder.AddNpmApp("webapp", "../MitchellBrown.WebApp")
    .WithHttpEndpoint(targetPort: 4200)
    .WithExternalHttpEndpoints()
    .PublishAsDockerFile();

builder.Build().Run();
