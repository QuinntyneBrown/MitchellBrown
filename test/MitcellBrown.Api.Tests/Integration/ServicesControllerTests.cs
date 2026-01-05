// Copyright (c) Quinntyne Brown. All Rights Reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.

using System.Net;
using System.Net.Http.Json;
using Microsoft.Extensions.DependencyInjection;
using MitchellBrown.Api.Features.Services;
using MitchellBrown.Core.Models.ServiceAggregate;
using MitchellBrown.Core.Services;

namespace MitcellBrown.Api.Tests.Integration;

public class ServicesControllerTests : IClassFixture<CustomWebApplicationFactory>
{
    private readonly CustomWebApplicationFactory _factory;
    private readonly HttpClient _client;

    public ServicesControllerTests(CustomWebApplicationFactory factory)
    {
        _factory = factory;
        _client = factory.CreateClient();
    }

    [Fact]
    public async Task GetServices_ReturnsSuccessAndCorrectContentType()
    {
        // Arrange
        await SeedTestDataAsync();

        // Act
        var response = await _client.GetAsync("/api/services");

        // Assert
        response.EnsureSuccessStatusCode();
        Assert.Equal("application/json; charset=utf-8", response.Content.Headers.ContentType?.ToString());
    }

    [Fact]
    public async Task GetServices_ReturnsSeededServices()
    {
        // Arrange
        await SeedTestDataAsync();

        // Act
        var response = await _client.GetAsync("/api/services");
        var result = await response.Content.ReadFromJsonAsync<GetServicesQueryResponse>();

        // Assert
        Assert.NotNull(result);
        Assert.NotNull(result.Services);
        Assert.Equal(3, result.Services.Count);
        Assert.Contains(result.Services, s => s.Title == "Financial Needs Analysis");
        Assert.Contains(result.Services, s => s.Title == "Estate Planning");
        Assert.Contains(result.Services, s => s.Title == "Insurance Needs");
    }

    [Fact]
    public async Task GetServices_ReturnsOnlyEnabledServices()
    {
        // Arrange
        using (var scope = _factory.Services.CreateScope())
        {
            var context = scope.ServiceProvider.GetRequiredService<IMitchellBrownContext>();
            
            var services = new[]
            {
                new Service("Enabled Service", "Description", "/icon.png", 1) { Enabled = true },
                new Service("Disabled Service", "Description", "/icon.png", 2) { Enabled = false }
            };

            foreach (var service in services)
            {
                context.Services.Add(service);
            }
            await context.SaveChangesAsync();
        }

        // Act
        var response = await _client.GetAsync("/api/services");
        var result = await response.Content.ReadFromJsonAsync<GetServicesQueryResponse>();

        // Assert
        Assert.NotNull(result);
        Assert.Single(result.Services);
        Assert.Equal("Enabled Service", result.Services[0].Title);
    }

    [Fact]
    public async Task GetServices_ReturnsServicesInCorrectOrder()
    {
        // Arrange
        using (var scope = _factory.Services.CreateScope())
        {
            var context = scope.ServiceProvider.GetRequiredService<IMitchellBrownContext>();
            
            var services = new[]
            {
                new Service("Third", "Description", "/icon.png", 3),
                new Service("First", "Description", "/icon.png", 1),
                new Service("Second", "Description", "/icon.png", 2)
            };

            foreach (var service in services)
            {
                context.Services.Add(service);
            }
            await context.SaveChangesAsync();
        }

        // Act
        var response = await _client.GetAsync("/api/services");
        var result = await response.Content.ReadFromJsonAsync<GetServicesQueryResponse>();

        // Assert
        Assert.NotNull(result);
        Assert.Equal(3, result.Services.Count);
        Assert.Equal("First", result.Services[0].Title);
        Assert.Equal("Second", result.Services[1].Title);
        Assert.Equal("Third", result.Services[2].Title);
    }

    private async Task SeedTestDataAsync()
    {
        using var scope = _factory.Services.CreateScope();
        var context = scope.ServiceProvider.GetRequiredService<IMitchellBrownContext>();
        
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

        foreach (var service in services)
        {
            context.Services.Add(service);
        }
        await context.SaveChangesAsync();
    }
}
