// Copyright (c) Quinntyne Brown. All Rights Reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.

using Aspire.Hosting;

var builder = DistributedApplication.CreateBuilder(args);

// Add the API project
var apiService = builder.AddProject("api", "../MitchellBrown.Api/MitchellBrown.Api.csproj")
    .WithExternalHttpEndpoints();

// Add the Angular web app as a Node.js application
var webapp = builder.AddNpmApp("webapp", "../MitchellBrown.WebApp")
    .WithHttpEndpoint(port: 4200, env: "PORT")
    .WithExternalHttpEndpoints()
    .PublishAsDockerFile();

builder.Build().Run();
