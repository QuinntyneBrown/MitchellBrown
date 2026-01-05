// Copyright (c) Quinntyne Brown. All Rights Reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.

using MitchellBrown.Infrastructure;
using MitchellBrown.Infrastructure.Data;

var builder = WebApplication.CreateBuilder(args);

// Skip infrastructure services registration if in test mode
var isTestMode = builder.Configuration.GetValue<bool>("SkipDbInitialization");
if (!isTestMode)
{
    var connectionString = builder.Configuration.GetConnectionString("DefaultConnection") 
        ?? "Server=(localdb)\\mssqllocaldb;Database=MitchellBrownDb;Trusted_Connection=True;MultipleActiveResultSets=true";
    
    builder.Services.AddInfrastructureServices(connectionString);
}

builder.Services.AddApiServices();

var app = builder.Build();

// Initialize database with seed data (skip during testing)
if (!isTestMode)
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

app.Run();

// Make Program accessible to tests
public partial class Program { }
