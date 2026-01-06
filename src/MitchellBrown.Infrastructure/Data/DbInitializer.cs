// Copyright (c) Quinntyne Brown. All Rights Reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.

using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using MitchellBrown.Core.Models.ServiceAggregate;
using MitchellBrown.Infrastructure.Services;

namespace MitchellBrown.Infrastructure.Data;

public static class DbInitializer
{
    public static async Task InitializeAsync(IServiceProvider serviceProvider)
    {
        using var scope = serviceProvider.CreateScope();
        var context = scope.ServiceProvider.GetRequiredService<MitchellBrownContext>();
        var logger = scope.ServiceProvider.GetRequiredService<ILogger<MitchellBrownContext>>();

        try
        {            
            // Ensure database is created
            await context.Database.MigrateAsync();

            // Check if data already exists
            if (await context.Services.AnyAsync())
            {
                logger.LogInformation("Database already contains seed data. Skipping initialization.");
                return;
            }

            // Seed Services
            var services = new[]
            {
                new Service(
                    title: "Financial Needs Analysis",
                    description: "We can help you with meeting your financial goals, manage risk and plan for future needs such as life insurance coverage, retirement, or debt repayment.",
                    iconUrl: "/assets/images/financial-analysis-icon.png",
                    order: 1),
                new Service(
                    title: "Estate Planning",
                    description: "We can help you understand how to best preserve wealth and ensure financial security for beneficiaries.",
                    iconUrl: "/assets/images/estate-planning-icon.png",
                    order: 2),
                new Service(
                    title: "Insurance Needs",
                    description: "Insurance can play a vital role in the event finances will be needed most, and building up wealth for future generations.",
                    iconUrl: "/assets/images/insurance-icon.png",
                    order: 3)
            };

            await context.Services.AddRangeAsync(services);
            await context.SaveChangesAsync();

            logger.LogInformation("Database seed data created successfully.");
        }
        catch (Exception ex)
        {
            logger.LogError(ex, "An error occurred while seeding the database.");
            throw;
        }
    }
}
