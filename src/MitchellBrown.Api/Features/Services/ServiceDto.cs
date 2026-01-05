// Copyright (c) Quinntyne Brown. All Rights Reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.

namespace MitchellBrown.Api.Features.Services;

public class ServiceDto
{
    public Guid ServiceId { get; set; }
    public string Title { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public string IconUrl { get; set; } = string.Empty;
    public int Order { get; set; }
    public bool Featured { get; set; }
    public bool Enabled { get; set; }
}
