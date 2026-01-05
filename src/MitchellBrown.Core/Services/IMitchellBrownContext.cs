// Copyright (c) Quinntyne Brown. All Rights Reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.

using Microsoft.EntityFrameworkCore;
using MitchellBrown.Core.Models.InquiryAggregate;

namespace MitchellBrown.Core.Services;

public interface IMitchellBrownContext
{
    DbSet<Inquiry> Inquiries { get; }

}

