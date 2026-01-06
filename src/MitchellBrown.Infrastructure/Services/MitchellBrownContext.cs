// Copyright (c) Quinntyne Brown. All Rights Reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.

using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using MitchellBrown.Core;
using MitchellBrown.Core.Models.InquiryAggregate;
using MitchellBrown.Core.Models.ServiceAggregate;
using MitchellBrown.Core.Services;

namespace MitchellBrown.Infrastructure.Services;

public class MitchellBrownContext: DbContext, IMitchellBrownContext
{
    private readonly ILogger<MitchellBrownContext> _logger;
    private readonly ITenantContext _tenantContext;

    /// <summary>
    /// Initializes a new instance of the <see cref="MitchellBrownContext"/> class.
    /// </summary>
    /// <param name="options">The DbContext options.</param>
    /// <param name="logger">The logger instance.</param>
    /// <param name="tenantContext">The tenant context for multi-tenancy support.</param>
    public MitchellBrownContext(
        DbContextOptions<MitchellBrownContext> options,
        ILogger<MitchellBrownContext> logger,
        ITenantContext tenantContext)
        : base(options)
    {
        ArgumentNullException.ThrowIfNull(logger);
        ArgumentNullException.ThrowIfNull(tenantContext);

        _logger = logger;
        _tenantContext = tenantContext;
    }

    public DbSet<Inquiry> Inquiries { get; set; }

    public DbSet<Service> Services { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        modelBuilder.Entity<Inquiry>()
            .HasKey(e => e.InquiryId);

        modelBuilder.Entity<Service>()
            .HasKey(e => e.ServiceId);

        // Apply global query filters for multi-tenancy
        modelBuilder.Entity<Inquiry>()
            .HasQueryFilter(e => e.TenantId == _tenantContext.TenantId);

        modelBuilder.Entity<Service>()
            .HasQueryFilter(e => e.TenantId == _tenantContext.TenantId);
    }
}
