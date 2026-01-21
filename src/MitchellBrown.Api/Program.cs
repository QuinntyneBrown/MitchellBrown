// Copyright (c) Quinntyne Brown. All Rights Reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.

using MitchellBrown.Infrastructure;
using MitchellBrown.Infrastructure.Data;

var builder = WebApplication.CreateBuilder(args);

// Add service defaults & Aspire service discovery.
builder.AddServiceDefaults();

// Skip infrastructure services registration if in test mode
var isTestMode = builder.Configuration.GetValue<bool>("SkipDbInitialization");
if (!isTestMode)
{
    var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");
    if (string.IsNullOrWhiteSpace(connectionString))
    {
        throw new InvalidOperationException(
            "Missing connection string 'ConnectionStrings:DefaultConnection'. " +
            "Set it in appsettings.json (e.g., SqlExpress) or provide it via environment-specific configuration.");
    }
    
    builder.Services.AddInfrastructureServices(connectionString);
}

builder.Services.AddApiServices();

var app = builder.Build();

// Initialize database with seed data (only in development, skip during testing)
if (!isTestMode && app.Environment.IsDevelopment())
{
    await DbInitializer.InitializeAsync(app.Services);
}

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.UseCors("CorsPolicy");

app.MapDefaultEndpoints();

app.Run();

// Make Program accessible to tests
public partial class Program { }
