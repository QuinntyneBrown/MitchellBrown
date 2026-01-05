// Copyright (c) Quinntyne Brown. All Rights Reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.

using MitchellBrown.Core.Models.ServiceAggregate;

namespace MitchellBrown.Api.Features.Services;

public static class ServiceExtensions
{
    public static ServiceDto ToDto(this Service service)
    {
        return new ServiceDto
        {
            ServiceId = service.ServiceId,
            Title = service.Title,
            Description = service.Description,
            IconUrl = service.IconUrl,
            Order = service.Order,
            Featured = service.Featured,
            Enabled = service.Enabled
        };
    }
}
