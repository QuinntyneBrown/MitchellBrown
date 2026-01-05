// Copyright (c) Quinntyne Brown. All Rights Reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.

using MediatR;
using Microsoft.AspNetCore.Mvc;
using MitchellBrown.Api.Features.Services;

namespace MitchellBrown.Api.Controllers;

[Route("api/services")]
[ApiController]
public class ServiceController : ControllerBase
{
    private readonly IMediator _mediator;

    public ServiceController(IMediator mediator)
    {
        _mediator = mediator;
    }

    [HttpGet]
    public async Task<ActionResult<GetServicesQueryResponse>> GetServices()
    {
        var response = await _mediator.Send(new GetServicesQuery());
        return Ok(response);
    }
}
