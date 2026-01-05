// Copyright (c) Quinntyne Brown. All Rights Reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.

using MitchellBrown.Core.Models.InquiryAggregate;

namespace MitchellBrown.Api.Features.Inquiries;

public static class InquiryExtensions
{
    public static InquiryDto ToDto(this Inquiry inquiry)
    {
        return new InquiryDto
        {
            InquiryId = inquiry.InquiryId,
            Type = inquiry.Type,
            FirstName = inquiry.FirstName,
            LastName = inquiry.LastName,
            Email = inquiry.Email,
            PhoneNumber = inquiry.PhoneNumber
        };
    }
}
