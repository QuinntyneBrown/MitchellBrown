// Copyright (c) Quinntyne Brown. All Rights Reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.

namespace MitchellBrown.Core;

public static class Constants
{
    /// <summary>
    /// Default tenant ID used for seeding and single-tenant scenarios.
    /// </summary>
    public static readonly Guid DefaultTenantId = Guid.Parse("00000000-0000-0000-0000-000000000001");

    /// <summary>
    /// HTTP header name for tenant identification in API requests.
    /// </summary>
    public const string TenantIdHeaderName = "X-Tenant-Id";
}
