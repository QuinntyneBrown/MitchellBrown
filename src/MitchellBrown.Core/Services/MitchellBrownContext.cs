// Copyright (c) Quinntyne Brown. All Rights Reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.

using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using MitchellBrown.Core.AggregateModels.InfoSessionRequest;

namespace MitchellBrown.Core.Services;

public class MitchellBrownContext: IMitchellBrownContext
{
    private readonly ILogger<MitchellBrownContext> _logger;

    /// <summary>
    /// 
    /// </summary>
    /// <param name="logger"></param>
    public MitchellBrownContext(ILogger<MitchellBrownContext> logger){
        ArgumentNullException.ThrowIfNull(logger);

        _logger = logger;

    }

    public DbSet<InfoSessionRequestAggregateRoot> InfoSessionRequests { get; private set; }

}

