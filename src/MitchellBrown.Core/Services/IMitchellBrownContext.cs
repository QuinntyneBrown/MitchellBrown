// Copyright (c) Quinntyne Brown. All Rights Reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.

using Microsoft.EntityFrameworkCore;
using MitchellBrown.Core.Models.InquiryAggregate;
using MitchellBrown.Core.Models.ServiceAggregate;

namespace MitchellBrown.Core.Services;

public interface IMitchellBrownContext
{
    DbSet<Inquiry> Inquiries { get; }

    DbSet<Service> Services { get; }

    Task<int> SaveChangesAsync(CancellationToken cancellationToken = default);
}

