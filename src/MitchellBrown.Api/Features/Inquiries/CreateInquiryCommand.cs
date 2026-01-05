// Copyright (c) Quinntyne Brown. All Rights Reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.

using MediatR;
using MitchellBrown.Core.Models.InquiryAggregate;
using MitchellBrown.Core.Models.InquiryAggregate.Enums;
using MitchellBrown.Core.Services;

namespace MitchellBrown.Api.Features.Inquiries;

public class CreateInquiryCommand : IRequest<CreateInquiryCommandResponse>
{
    public InquiryType Type { get; set; }
    public string FirstName { get; set; } = string.Empty;
    public string LastName { get; set; } = string.Empty;
    public string Email { get; set; } = string.Empty;
    public string PhoneNumber { get; set; } = string.Empty;
}

public class CreateInquiryCommandResponse
{
    public InquiryDto Inquiry { get; set; } = null!;
}

public class CreateInquiryCommandHandler : IRequestHandler<CreateInquiryCommand, CreateInquiryCommandResponse>
{
    private readonly IMitchellBrownContext _context;

    public CreateInquiryCommandHandler(IMitchellBrownContext context)
    {
        _context = context;
    }

    public async Task<CreateInquiryCommandResponse> Handle(CreateInquiryCommand request, CancellationToken cancellationToken)
    {
        var inquiry = new Inquiry(
            type: request.Type,
            firstName: request.FirstName,
            lastName: request.LastName,
            email: request.Email,
            phoneNumber: request.PhoneNumber);

        _context.Inquiries.Add(inquiry);
        await _context.SaveChangesAsync(cancellationToken);

        return new CreateInquiryCommandResponse
        {
            Inquiry = inquiry.ToDto()
        };
    }
}
