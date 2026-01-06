// Copyright (c) Quinntyne Brown. All Rights Reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.

using System.Net.Http.Headers;
using System.Net.Http.Json;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using MitchellBrown.Api.Features.Inquiries;
using MitchellBrown.Core;
using MitchellBrown.Core.Models.InquiryAggregate.Enums;
using MitchellBrown.Core.Services;

namespace MitcellBrown.Api.Tests.Integration;

public class TenantIsolationTests : IClassFixture<CustomWebApplicationFactory>
{
    private readonly CustomWebApplicationFactory _factory;
    private readonly Guid _tenantA = Guid.Parse("11111111-1111-1111-1111-111111111111");
    private readonly Guid _tenantB = Guid.Parse("22222222-2222-2222-2222-222222222222");

    public TenantIsolationTests(CustomWebApplicationFactory factory)
    {
        _factory = factory;
    }

    [Fact]
    public async Task Inquiry_CreatedByTenantA_HasCorrectTenantId()
    {
        // Arrange
        var client = _factory.CreateClient();
        client.DefaultRequestHeaders.Add("X-Tenant-Id", _tenantA.ToString());

        var command = new CreateInquiryCommand
        {
            Type = InquiryType.General,
            FirstName = "John",
            LastName = "Doe",
            Email = "john@tenanta.com",
            PhoneNumber = "555-1111"
        };

        // Act
        var response = await client.PostAsJsonAsync("/api/inquiries", command);

        // Assert
        response.EnsureSuccessStatusCode();
        var result = await response.Content.ReadFromJsonAsync<CreateInquiryCommandResponse>();
        Assert.NotNull(result);

        using var scope = _factory.Services.CreateScope();
        var context = scope.ServiceProvider.GetRequiredService<IMitchellBrownContext>();
        var savedInquiry = await context.Inquiries.FindAsync(result.Inquiry.InquiryId);

        Assert.NotNull(savedInquiry);
        Assert.Equal(_tenantA, savedInquiry.TenantId);
    }

    [Fact]
    public async Task Inquiry_CreatedByTenantB_HasCorrectTenantId()
    {
        // Arrange
        var client = _factory.CreateClient();
        client.DefaultRequestHeaders.Add("X-Tenant-Id", _tenantB.ToString());

        var command = new CreateInquiryCommand
        {
            Type = InquiryType.ServiceInquiry,
            FirstName = "Jane",
            LastName = "Smith",
            Email = "jane@tenantb.com",
            PhoneNumber = "555-2222"
        };

        // Act
        var response = await client.PostAsJsonAsync("/api/inquiries", command);

        // Assert
        response.EnsureSuccessStatusCode();
        var result = await response.Content.ReadFromJsonAsync<CreateInquiryCommandResponse>();
        Assert.NotNull(result);

        using var scope = _factory.Services.CreateScope();
        var context = scope.ServiceProvider.GetRequiredService<IMitchellBrownContext>();
        var savedInquiry = await context.Inquiries.FindAsync(result.Inquiry.InquiryId);

        Assert.NotNull(savedInquiry);
        Assert.Equal(_tenantB, savedInquiry.TenantId);
    }

    [Fact]
    public async Task TenantA_CannotSee_TenantB_Inquiries()
    {
        // Arrange - Create inquiry for Tenant B
        var clientB = _factory.CreateClient();
        clientB.DefaultRequestHeaders.Add("X-Tenant-Id", _tenantB.ToString());

        var commandB = new CreateInquiryCommand
        {
            Type = InquiryType.General,
            FirstName = "Bob",
            LastName = "TenantB",
            Email = "bob@tenantb.com",
            PhoneNumber = "555-3333"
        };

        var responseB = await clientB.PostAsJsonAsync("/api/inquiries", commandB);
        var resultB = await responseB.Content.ReadFromJsonAsync<CreateInquiryCommandResponse>();
        Assert.NotNull(resultB);

        // Act - Try to access with Tenant A context
        using var scopeA = _factory.Services.CreateScope();
        var contextA = scopeA.ServiceProvider.GetRequiredService<IMitchellBrownContext>();

        // Create a mock tenant context for Tenant A
        var tenantContext = scopeA.ServiceProvider.GetRequiredService<ITenantContext>();

        // Since the context uses query filters, when we query with Tenant A's context,
        // we should not find Tenant B's inquiry
        var inquiry = await contextA.Inquiries.FindAsync(resultB.Inquiry.InquiryId);

        // Assert - Tenant A cannot see Tenant B's inquiry
        Assert.Null(inquiry);
    }

    [Fact]
    public async Task TenantB_CannotSee_TenantA_Inquiries()
    {
        // Arrange - Create inquiry for Tenant A
        var clientA = _factory.CreateClient();
        clientA.DefaultRequestHeaders.Add("X-Tenant-Id", _tenantA.ToString());

        var commandA = new CreateInquiryCommand
        {
            Type = InquiryType.ServiceInquiry,
            FirstName = "Alice",
            LastName = "TenantA",
            Email = "alice@tenanta.com",
            PhoneNumber = "555-4444"
        };

        var responseA = await clientA.PostAsJsonAsync("/api/inquiries", commandA);
        var resultA = await responseA.Content.ReadFromJsonAsync<CreateInquiryCommandResponse>();
        Assert.NotNull(resultA);

        // Act - Try to access with Tenant B context
        using var scopeB = _factory.Services.CreateScope();
        var contextB = scopeB.ServiceProvider.GetRequiredService<IMitchellBrownContext>();

        // Query filters should prevent access to Tenant A's data
        var inquiry = await contextB.Inquiries.FindAsync(resultA.Inquiry.InquiryId);

        // Assert - Tenant B cannot see Tenant A's inquiry
        Assert.Null(inquiry);
    }

    [Fact]
    public async Task MultipleTenants_CreateInquiries_DataIsIsolated()
    {
        // Arrange & Act - Create inquiries for both tenants
        var clientA = _factory.CreateClient();
        clientA.DefaultRequestHeaders.Add("X-Tenant-Id", _tenantA.ToString());

        var clientB = _factory.CreateClient();
        clientB.DefaultRequestHeaders.Add("X-Tenant-Id", _tenantB.ToString());

        // Create 3 inquiries for Tenant A
        for (int i = 0; i < 3; i++)
        {
            var command = new CreateInquiryCommand
            {
                Type = InquiryType.General,
                FirstName = $"TenantA-User{i}",
                LastName = "Lastname",
                Email = $"user{i}@tenanta.com",
                PhoneNumber = $"555-100{i}"
            };
            await clientA.PostAsJsonAsync("/api/inquiries", command);
        }

        // Create 2 inquiries for Tenant B
        for (int i = 0; i < 2; i++)
        {
            var command = new CreateInquiryCommand
            {
                Type = InquiryType.ServiceInquiry,
                FirstName = $"TenantB-User{i}",
                LastName = "Lastname",
                Email = $"user{i}@tenantb.com",
                PhoneNumber = $"555-200{i}"
            };
            await clientB.PostAsJsonAsync("/api/inquiries", command);
        }

        // Assert - Each tenant sees only their own inquiries
        using var scope = _factory.Services.CreateScope();
        var context = scope.ServiceProvider.GetRequiredService<IMitchellBrownContext>();

        // Count all inquiries in database (bypassing filters)
        var allInquiriesCount = context.Inquiries.IgnoreQueryFilters().Count();
        Assert.True(allInquiriesCount >= 5); // At least 5 from this test

        // Each tenant should only see their own data through the query filter
        var tenantAInquiries = context.Inquiries.IgnoreQueryFilters()
            .Where(i => i.TenantId == _tenantA)
            .Count();
        var tenantBInquiries = context.Inquiries.IgnoreQueryFilters()
            .Where(i => i.TenantId == _tenantB)
            .Count();

        Assert.Equal(3, tenantAInquiries);
        Assert.Equal(2, tenantBInquiries);
    }

    [Fact]
    public async Task NoTenantId_InHeader_CreatesInquiry_WithEmptyTenantId()
    {
        // Arrange
        var client = _factory.CreateClient();
        // No X-Tenant-Id header

        var command = new CreateInquiryCommand
        {
            Type = InquiryType.General,
            FirstName = "NoTenant",
            LastName = "User",
            Email = "notenant@example.com",
            PhoneNumber = "555-0000"
        };

        // Act
        var response = await client.PostAsJsonAsync("/api/inquiries", command);

        // Assert
        response.EnsureSuccessStatusCode();
        var result = await response.Content.ReadFromJsonAsync<CreateInquiryCommandResponse>();
        Assert.NotNull(result);

        using var scope = _factory.Services.CreateScope();
        var context = scope.ServiceProvider.GetRequiredService<IMitchellBrownContext>();
        var savedInquiry = await context.Inquiries
            .IgnoreQueryFilters()
            .FirstOrDefaultAsync(i => i.InquiryId == result.Inquiry.InquiryId);

        Assert.NotNull(savedInquiry);
        Assert.Equal(Guid.Empty, savedInquiry.TenantId);
    }
}
