// Copyright (c) Quinntyne Brown. All Rights Reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.

using MitchellBrown.Core.AggregateModels.InfoSessionRequest.Models;

namespace MitchellBrown.Core.AggregateModels.InfoSessionRequest;

public class InfoSessionRequestAggregateRoot
{
    public InfoSessionRequestAggregateRoot(
        InfoSessionRequestType type,
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

    public Guid InfoSessionRequestId { get; set; }
    
    public InfoSessionRequestType Type { get; set; }

    public string FirstName { get; set; }

    public string LastName { get; set; }

    public string Email { get; set; }

    public string PhoneNumber { get; set; }
}
