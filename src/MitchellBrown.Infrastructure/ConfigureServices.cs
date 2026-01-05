// Copyright (c) Quinntyne Brown. All Rights Reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.

using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using MitchellBrown.Core.Services;
using MitchellBrown.Infrastructure.Services;

namespace MitchellBrown.Infrastructure;

public static class ConfigureServices
{
    public static void AddInfrastructureServices(this IServiceCollection services, string connectionString)
    {
        services.AddDbContext<MitchellBrownContext>(options =>
            options.UseSqlServer(connectionString));

        services.AddScoped<IMitchellBrownContext>(provider =>
            provider.GetRequiredService<MitchellBrownContext>());
    }
}
