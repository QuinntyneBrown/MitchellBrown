// Copyright (c) Quinntyne Brown. All Rights Reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.

using System.Net;
using System.Net.Http.Json;
using Microsoft.Extensions.DependencyInjection;
using MitchellBrown.Api.Features.Inquiries;
using MitchellBrown.Core.Models.InquiryAggregate.Enums;
using MitchellBrown.Core.Services;

namespace MitcellBrown.Api.Tests.Integration;

public class InquiriesControllerTests : IClassFixture<CustomWebApplicationFactory>
{
    private readonly CustomWebApplicationFactory _factory;
    private readonly HttpClient _client;

    public InquiriesControllerTests(CustomWebApplicationFactory factory)
    {
        _factory = factory;
        _client = factory.CreateClient();
    }

    [Fact]
    public async Task CreateInquiry_WithValidData_ReturnsSuccess()
    {
        // Arrange
        var command = new CreateInquiryCommand
        {
            Type = InquiryType.General,
            FirstName = "John",
            LastName = "Doe",
            Email = "john.doe@example.com",
            PhoneNumber = "555-1234"
        };

        // Act
        var response = await _client.PostAsJsonAsync("/api/inquiries", command);

        // Assert
        response.EnsureSuccessStatusCode();
        var result = await response.Content.ReadFromJsonAsync<CreateInquiryCommandResponse>();
        Assert.NotNull(result);
        Assert.NotNull(result.Inquiry);
        Assert.Equal("John", result.Inquiry.FirstName);
        Assert.Equal("Doe", result.Inquiry.LastName);
        Assert.Equal("john.doe@example.com", result.Inquiry.Email);
    }

    [Fact]
    public async Task CreateInquiry_SavesInquiryToDatabase()
    {
        // Arrange
        var command = new CreateInquiryCommand
        {
            Type = InquiryType.ServiceInquiry,
            FirstName = "Jane",
            LastName = "Smith",
            Email = "jane.smith@example.com",
            PhoneNumber = "555-5678"
        };

        // Act
        var response = await _client.PostAsJsonAsync("/api/inquiries", command);
        var result = await response.Content.ReadFromJsonAsync<CreateInquiryCommandResponse>();

        // Assert
        Assert.NotNull(result);
        
        using var scope = _factory.Services.CreateScope();
        var context = scope.ServiceProvider.GetRequiredService<IMitchellBrownContext>();
        var savedInquiry = await context.Inquiries.FindAsync(result.Inquiry.InquiryId);
        
        Assert.NotNull(savedInquiry);
        Assert.Equal("Jane", savedInquiry.FirstName);
        Assert.Equal("Smith", savedInquiry.LastName);
        Assert.Equal("jane.smith@example.com", savedInquiry.Email);
        Assert.Equal(InquiryType.ServiceInquiry, savedInquiry.Type);
    }

    [Fact]
    public async Task CreateInquiry_WithDifferentTypes_CreatesCorrectly()
    {
        // Arrange & Act
        var generalInquiry = new CreateInquiryCommand
        {
            Type = InquiryType.General,
            FirstName = "Test1",
            LastName = "User1",
            Email = "test1@example.com",
            PhoneNumber = "555-0001"
        };

        var serviceInquiry = new CreateInquiryCommand
        {
            Type = InquiryType.ServiceInquiry,
            FirstName = "Test2",
            LastName = "User2",
            Email = "test2@example.com",
            PhoneNumber = "555-0002"
        };

        var response1 = await _client.PostAsJsonAsync("/api/inquiries", generalInquiry);
        var response2 = await _client.PostAsJsonAsync("/api/inquiries", serviceInquiry);

        // Assert
        response1.EnsureSuccessStatusCode();
        response2.EnsureSuccessStatusCode();

        var result1 = await response1.Content.ReadFromJsonAsync<CreateInquiryCommandResponse>();
        var result2 = await response2.Content.ReadFromJsonAsync<CreateInquiryCommandResponse>();

        Assert.NotNull(result1);
        Assert.NotNull(result2);
        Assert.Equal(InquiryType.General, result1.Inquiry.Type);
        Assert.Equal(InquiryType.ServiceInquiry, result2.Inquiry.Type);
    }

    [Fact]
    public async Task CreateInquiry_GeneratesUniqueIds()
    {
        // Arrange
        var command1 = new CreateInquiryCommand
        {
            Type = InquiryType.General,
            FirstName = "User",
            LastName = "One",
            Email = "user1@example.com",
            PhoneNumber = "555-0001"
        };

        var command2 = new CreateInquiryCommand
        {
            Type = InquiryType.General,
            FirstName = "User",
            LastName = "Two",
            Email = "user2@example.com",
            PhoneNumber = "555-0002"
        };

        // Act
        var response1 = await _client.PostAsJsonAsync("/api/inquiries", command1);
        var response2 = await _client.PostAsJsonAsync("/api/inquiries", command2);

        var result1 = await response1.Content.ReadFromJsonAsync<CreateInquiryCommandResponse>();
        var result2 = await response2.Content.ReadFromJsonAsync<CreateInquiryCommandResponse>();

        // Assert
        Assert.NotNull(result1);
        Assert.NotNull(result2);
        Assert.NotEqual(Guid.Empty, result1.Inquiry.InquiryId);
        Assert.NotEqual(Guid.Empty, result2.Inquiry.InquiryId);
        Assert.NotEqual(result1.Inquiry.InquiryId, result2.Inquiry.InquiryId);
    }
}
