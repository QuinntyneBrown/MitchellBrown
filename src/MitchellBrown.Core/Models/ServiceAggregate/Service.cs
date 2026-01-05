// Copyright (c) Quinntyne Brown. All Rights Reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.

namespace MitchellBrown.Core.Models.ServiceAggregate;

public class Service
{
    public Service(
        string title,
        string description,
        string iconUrl,
        int order)
    {
        Title = title;
        Description = description;
        IconUrl = iconUrl;
        Order = order;
        Enabled = true;
        Featured = false;
    }

    public Guid ServiceId { get; set; }

    public string Title { get; set; }

    public string Description { get; set; }

    public string IconUrl { get; set; }

    public int Order { get; set; }

    public bool Featured { get; set; }

    public bool Enabled { get; set; }
}
