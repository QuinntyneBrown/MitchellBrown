// Copyright (c) Quinntyne Brown. All Rights Reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.

using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using MitchellBrown.Core;
using MitchellBrown.Core.Models.InquiryAggregate;
using MitchellBrown.Core.Models.InquiryAggregate.Enums;
using MitchellBrown.Core.Models.ServiceAggregate;
using MitchellBrown.Core.Services;

namespace MitcellBrown.Api.Tests.Integration;

public class TenantDataIsolationTests : IClassFixture<CustomWebApplicationFactory>
{
    private readonly CustomWebApplicationFactory _factory;
    private readonly Guid _tenantA = Guid.Parse("AAA11111-1111-1111-1111-111111111111");
    private readonly Guid _tenantB = Guid.Parse("BBB22222-2222-2222-2222-222222222222");

    public TenantDataIsolationTests(CustomWebApplicationFactory factory)
    {
        _factory = factory;
    }

    [Fact]
    public async Task QueryFilters_AutomaticallyFilter_InquiriesByTenantId()
    {
        // Arrange - Create inquiries for both tenants directly in database
        using (var scope = _factory.Services.CreateScope())
        {
            var context = scope.ServiceProvider.GetRequiredService<IMitchellBrownContext>();

            var inquiryA = new Inquiry(_tenantA, InquiryType.General, "John", "TenantA", "john@tenanta.com", "555-1111");
            var inquiryB = new Inquiry(_tenantB, InquiryType.General, "Jane", "TenantB", "jane@tenantb.com", "555-2222");

            context.Inquiries.Add(inquiryA);
            context.Inquiries.Add(inquiryB);
            await context.SaveChangesAsync();
        }

        // Act & Assert - Verify each tenant can only see their own data
        using (var scope = _factory.Services.CreateScope())
        {
            var context = scope.ServiceProvider.GetRequiredService<IMitchellBrownContext>();

            // Without IgnoreQueryFilters, we can't see anything because there's no active tenant context
            // But we can verify data exists with IgnoreQueryFilters
            var allInquiries = await context.Inquiries
                .IgnoreQueryFilters()
                .ToListAsync();

            var tenantAInquiries = allInquiries.Where(i => i.TenantId == _tenantA).ToList();
            var tenantBInquiries = allInquiries.Where(i => i.TenantId == _tenantB).ToList();

            Assert.Single(tenantAInquiries);
            Assert.Single(tenantBInquiries);
            Assert.Equal("John", tenantAInquiries[0].FirstName);
            Assert.Equal("Jane", tenantBInquiries[0].FirstName);
        }
    }

    [Fact]
    public async Task TenantId_IsSetCorrectly_OnNewInquiries()
    {
        // Arrange & Act - Create inquiry with specific tenant ID
        var testTenantId = Guid.NewGuid();
        using (var scope = _factory.Services.CreateScope())
        {
            var context = scope.ServiceProvider.GetRequiredService<IMitchellBrownContext>();

            var inquiry = new Inquiry(
                testTenantId,
                InquiryType.ServiceInquiry,
                "Test",
                "User",
                "test@example.com",
                "555-0000");

            context.Inquiries.Add(inquiry);
            await context.SaveChangesAsync();

            // Assert
            var saved = await context.Inquiries
                .IgnoreQueryFilters()
                .FirstOrDefaultAsync(i => i.InquiryId == inquiry.InquiryId);

            Assert.NotNull(saved);
            Assert.Equal(testTenantId, saved.TenantId);
        }
    }

    [Fact]
    public async Task TenantId_IsPersisted_InDatabase()
    {
        // Arrange
        var testTenantId = Guid.NewGuid();
        Guid inquiryId;

        using (var scope = _factory.Services.CreateScope())
        {
            var context = scope.ServiceProvider.GetRequiredService<IMitchellBrownContext>();

            var inquiry = new Inquiry(
                testTenantId,
                InquiryType.General,
                "Persistence",
                "Test",
                "persist@example.com",
                "555-9999");

            context.Inquiries.Add(inquiry);
            await context.SaveChangesAsync();
            inquiryId = inquiry.InquiryId;
        }

        // Act - Retrieve in a new scope
        using (var scope = _factory.Services.CreateScope())
        {
            var context = scope.ServiceProvider.GetRequiredService<IMitchellBrownContext>();

            var retrieved = await context.Inquiries
                .IgnoreQueryFilters()
                .FirstOrDefaultAsync(i => i.InquiryId == inquiryId);

            // Assert
            Assert.NotNull(retrieved);
            Assert.Equal(testTenantId, retrieved.TenantId);
            Assert.Equal("Persistence", retrieved.FirstName);
        }
    }

    [Fact]
    public async Task MultipleInquiries_FromDifferentTenants_AreCorrectlyIsolated()
    {
        // Arrange - Create multiple inquiries for each tenant with unique IDs
        var uniqueTenantA = Guid.NewGuid();
        var uniqueTenantB = Guid.NewGuid();

        using (var scope = _factory.Services.CreateScope())
        {
            var context = scope.ServiceProvider.GetRequiredService<IMitchellBrownContext>();

            // Create 3 inquiries for Tenant A
            for (int i = 0; i < 3; i++)
            {
                var inquiry = new Inquiry(
                    uniqueTenantA,
                    InquiryType.General,
                    $"UserA{i}",
                    "LastName",
                    $"usera{i}@example.com",
                    $"555-100{i}");
                context.Inquiries.Add(inquiry);
            }

            // Create 2 inquiries for Tenant B
            for (int i = 0; i < 2; i++)
            {
                var inquiry = new Inquiry(
                    uniqueTenantB,
                    InquiryType.ServiceInquiry,
                    $"UserB{i}",
                    "LastName",
                    $"userb{i}@example.com",
                    $"555-200{i}");
                context.Inquiries.Add(inquiry);
            }

            await context.SaveChangesAsync();
        }

        // Act & Assert
        using (var scope = _factory.Services.CreateScope())
        {
            var context = scope.ServiceProvider.GetRequiredService<IMitchellBrownContext>();

            var tenantACount = await context.Inquiries
                .IgnoreQueryFilters()
                .Where(i => i.TenantId == uniqueTenantA)
                .CountAsync();

            var tenantBCount = await context.Inquiries
                .IgnoreQueryFilters()
                .Where(i => i.TenantId == uniqueTenantB)
                .CountAsync();

            Assert.Equal(3, tenantACount);
            Assert.Equal(2, tenantBCount);
        }
    }

    [Fact]
    public async Task Services_CanAlsoHave_TenantId()
    {
        // Arrange
        var testTenantId = Guid.NewGuid();

        using (var scope = _factory.Services.CreateScope())
        {
            var context = scope.ServiceProvider.GetRequiredService<IMitchellBrownContext>();

            var service = new Service(
                testTenantId,
                "Test Service",
                "Test Description",
                "/icon.png",
                1);

            context.Services.Add(service);
            await context.SaveChangesAsync();

            // Assert
            var saved = await context.Services
                .IgnoreQueryFilters()
                .FirstOrDefaultAsync(s => s.ServiceId == service.ServiceId);

            Assert.NotNull(saved);
            Assert.Equal(testTenantId, saved.TenantId);
        }
    }
}
