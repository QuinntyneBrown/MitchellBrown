// Copyright (c) Quinntyne Brown. All Rights Reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.

using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using MitchellBrown.Core.Models.InquiryAggregate;
using MitchellBrown.Core.Services;

namespace MitchellBrown.Infrastructure.Services;

public class MitchellBrownContext: DbContext, IMitchellBrownContext
{
    private readonly ILogger<MitchellBrownContext> _logger;

    /// <summary>
    /// Initializes a new instance of the <see cref="MitchellBrownContext"/> class.
    /// </summary>
    /// <param name="options">The DbContext options.</param>
    /// <param name="logger">The logger instance.</param>
    public MitchellBrownContext(
        DbContextOptions<MitchellBrownContext> options,
        ILogger<MitchellBrownContext> logger)
        : base(options)
    {
        ArgumentNullException.ThrowIfNull(logger);

        _logger = logger;
    }

    public DbSet<Inquiry> Inquiries { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        modelBuilder.Entity<Inquiry>()
            .HasKey(e => e.InquiryId);
    }
}
