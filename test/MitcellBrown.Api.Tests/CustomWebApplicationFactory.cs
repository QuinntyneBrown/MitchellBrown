// Copyright (c) Quinntyne Brown. All Rights Reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.

using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc.Testing;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using MitchellBrown.Core.Services;
using MitchellBrown.Infrastructure.Services;

namespace MitcellBrown.Api.Tests;

public class CustomWebApplicationFactory : WebApplicationFactory<Program>
{
    private readonly string _databaseName = $"TestDatabase_{Guid.NewGuid()}";

    protected override void ConfigureWebHost(IWebHostBuilder builder)
    {
        // Skip database initialization
        builder.UseSetting("SkipDbInitialization", "true");

        builder.ConfigureServices(services =>
        {
            // Add InMemory database for testing - using shared database name
            services.AddDbContext<MitchellBrownContext>(options =>
            {
                options.UseInMemoryDatabase(_databaseName);
            });

            // Add IMitchellBrownContext
            services.AddScoped<IMitchellBrownContext>(provider =>
                provider.GetRequiredService<MitchellBrownContext>());
        });
    }
}
