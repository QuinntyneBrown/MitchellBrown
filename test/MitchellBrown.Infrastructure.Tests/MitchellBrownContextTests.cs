// Copyright (c) Quinntyne Brown. All Rights Reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.

using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using MitchellBrown.Core;
using MitchellBrown.Core.Models.InquiryAggregate;
using MitchellBrown.Infrastructure.Services;
using Moq;

namespace MitchellBrown.Infrastructure.Tests;

public class MitchellBrownContextTests
{
    [Fact]
    public void MitchellBrownContext_CanBeInstantiated()
    {
        // Arrange
        var options = new DbContextOptionsBuilder<MitchellBrownContext>()
            .UseInMemoryDatabase(databaseName: "TestDatabase")
            .Options;
        var mockLogger = new Mock<ILogger<MitchellBrownContext>>();
        var mockTenantContext = new Mock<ITenantContext>();
        mockTenantContext.Setup(x => x.TenantId).Returns(Constants.DefaultTenantId);
        mockTenantContext.Setup(x => x.HasTenant).Returns(true);

        // Act
        using var context = new MitchellBrownContext(options, mockLogger.Object, mockTenantContext.Object);

        // Assert
        Assert.NotNull(context);
        Assert.NotNull(context.Inquiries);
    }

    [Fact]
    public void MitchellBrownContext_CanAddAndRetrieveInquiries()
    {
        // Arrange
        var options = new DbContextOptionsBuilder<MitchellBrownContext>()
            .UseInMemoryDatabase(databaseName: "TestDatabase_AddRetrieve")
            .Options;
        var mockLogger = new Mock<ILogger<MitchellBrownContext>>();
        var mockTenantContext = new Mock<ITenantContext>();
        mockTenantContext.Setup(x => x.TenantId).Returns(Constants.DefaultTenantId);
        mockTenantContext.Setup(x => x.HasTenant).Returns(true);

        // Act
        using (var context = new MitchellBrownContext(options, mockLogger.Object, mockTenantContext.Object))
        {
            var inquiry = new Inquiry(
                tenantId: Constants.DefaultTenantId,
                type: default,
                firstName: "John",
                lastName: "Doe",
                email: "john.doe@example.com",
                phoneNumber: "555-1234");
            context.Inquiries.Add(inquiry);
            context.SaveChanges();
        }

        // Assert
        using (var context = new MitchellBrownContext(options, mockLogger.Object, mockTenantContext.Object))
        {
            Assert.Single(context.Inquiries);
        }
    }
}
