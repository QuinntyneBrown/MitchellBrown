// Copyright (c) Quinntyne Brown. All Rights Reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.

using MitchellBrown.Core.AggregateModels.Inquiry.Models;

namespace MitchellBrown.Core.AggregateModels.Inquiry;

public class InquiryAggregateRoot
{
    public InquiryAggregateRoot(
        InquiryType type,
        string firstName,
        string lastName,
        string email,
        string phoneNumber)
    {
        Type = type;
        FirstName = firstName;
        LastName = lastName;
        Email = email;
        PhoneNumber = phoneNumber;
    }

    public Guid InquiryId { get; set; }
    
    public InquiryType Type { get; set; }

    public string FirstName { get; set; }

    public string LastName { get; set; }

    public string Email { get; set; }

    public string PhoneNumber { get; set; }
}
