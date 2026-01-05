// Copyright (c) Quinntyne Brown. All Rights Reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.

using MediatR;
using Microsoft.EntityFrameworkCore;
using MitchellBrown.Core.Services;

namespace MitchellBrown.Api.Features.Services;

public class GetServicesQuery : IRequest<GetServicesQueryResponse>
{
}

public class GetServicesQueryResponse
{
    public List<ServiceDto> Services { get; set; } = new();
}

public class GetServicesQueryHandler : IRequestHandler<GetServicesQuery, GetServicesQueryResponse>
{
    private readonly IMitchellBrownContext _context;

    public GetServicesQueryHandler(IMitchellBrownContext context)
    {
        _context = context;
    }

    public async Task<GetServicesQueryResponse> Handle(GetServicesQuery request, CancellationToken cancellationToken)
    {
        var services = await _context.Services
            .Where(s => s.Enabled)
            .OrderBy(s => s.Order)
            .ToListAsync(cancellationToken);

        return new GetServicesQueryResponse
        {
            Services = services.Select(s => s.ToDto()).ToList()
        };
    }
}
