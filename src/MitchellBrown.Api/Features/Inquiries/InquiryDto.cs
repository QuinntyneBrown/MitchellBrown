// Copyright (c) Quinntyne Brown. All Rights Reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.

using MitchellBrown.Core.Models.InquiryAggregate.Enums;

namespace MitchellBrown.Api.Features.Inquiries;

public class InquiryDto
{
    public Guid InquiryId { get; set; }
    public InquiryType Type { get; set; }
    public string FirstName { get; set; } = string.Empty;
    public string LastName { get; set; } = string.Empty;
    public string Email { get; set; } = string.Empty;
    public string PhoneNumber { get; set; } = string.Empty;
}
