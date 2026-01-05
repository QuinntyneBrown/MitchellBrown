# Homepage Design Specifications - Addendum

## Reference
This document serves as an addendum to the existing [Homepage & Navigation Requirements](./requirements.md) document. It provides specific design specifications derived from the approved homepage design.

## Overview
The homepage design specifications are based on the marketing website mockup provided by the client. All visual design requirements, color specifications, typography, and layout details are documented in the main design documentation.

## Design Documentation Location
All homepage design specifications, wireframes, and mockups are located in:
```
/docs/homepage-design-requirements.md
/docs/HOMEPAGE-DESIGN-README.md
/docs/mobile-wireframe-low-fidelity.svg
/docs/mobile-mockup-high-fidelity.svg
/docs/mobile-wireframe-low-fidelity.png
/docs/mobile-mockup-high-fidelity.png
```

## Design System Integration

### Colors (Updated from Design)
The following color palette must be used throughout the homepage implementation:

#### Primary Colors
- **Primary Orange/Peach**: `#F5A84A` - Hero backgrounds, CTAs, accents
- **Primary Blue**: `#0B4F8A` - Links, button borders, emphasized text
- **Dark Blue**: `#003D6B` - Header text, footer, "your" in hero
- **Light Blue**: `#1B5A9E` - Section backgrounds (services, contact, form)

#### Secondary Colors
- **White**: `#FFFFFF` - Text on colored backgrounds, card backgrounds
- **Light Gray**: `#F5F5F5` - Subtle backgrounds
- **Dark Text**: `#333333` - Body text on white backgrounds
- **Medium Gray**: `#555555` - Secondary text in cards
- **Border Gray**: `#E5E5E5` - Borders and dividers
- **Light Blue Accent**: `#7BC8F6` - Contact section labels

### Typography (Updated from Design)

#### Font Family
- Primary: Sans-serif (Inter, Open Sans, or Roboto recommended)
- System font fallback: -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif

#### Font Sizes - Mobile (375px)
- Hero Headline: 36-42px, Bold (700)
- Hero Emphasis ("your"): 36-42px, Extra Bold (800)
- Section Headings (H2): 28-32px, Bold (700)
- Card Titles (H3): 20-24px, Semi-bold (600)
- Body Text: 16px, Regular (400), Line height 1.6
- Button Text: 16px, Semi-bold (600)

#### Font Sizes - Desktop (1024px+)
- Hero Headline: 64-72px, Bold (700)
- Section Headings (H2): 36-42px, Bold (700)
- Card Titles (H3): 24-28px, Semi-bold (600)
- Body Text: 16-18px, Regular (400)

### Spacing System
- Container Max Width: 1200px
- Mobile Padding: 20px
- Desktop Padding: 60px
- Section Padding (Vertical): 80px desktop, 60px mobile
- Card Gap: 30px

### Border Radius
- Buttons: 4px
- Cards: 8px
- Input Fields: 4px

## Updated Component Specifications

### HPN-FE-001: Homepage Hero Section (Design Update)
**Updated Acceptance Criteria**:
- Background Color: `#F5A84A` (solid color, no image)
- Height: 450px mobile, 500px desktop
- Headline: "Let **your** finances **grow.**"
  - "Let", "finances", "grow." in white `#FFFFFF`, Bold (700)
  - "**your**" in Dark Blue `#003D6B`, Extra Bold (800)
  - Multi-line display: "Let your" / "finances" / "grow."
  - Font size: 36-42px mobile, 64-72px desktop
  - Center-aligned
- CTA Button: "Request a Free Info Session"
  - Transparent background with 2px Blue `#0B4F8A` border
  - Blue `#0B4F8A` text, Semi-bold (600)
  - Padding: 14px 32px
  - Border Radius: 4px
  - Hover: Blue background, white text, smooth transition (0.3s)
  - Position: Centered, 40px below headline

### HPN-FE-002: Primary Navigation Bar (Design Update)
**Updated Acceptance Criteria**:
- Background: White `#FFFFFF`
- Height: 70px
- Border Bottom: 1px solid `#E5E5E5`
- Logo/Brand: "Mitchell Brown" or logo, Dark Blue `#003D6B`, left-aligned
- Navigation Links (Desktop):
  1. Life Insurance (left side)
  2. Investments (left side)
  3. Retirement Planning (right side)
  4. Estate Planning (right side)
- Link Styling:
  - Default: Dark Blue `#0B4F8A`, 16px, Regular (400)
  - Hover: Orange `#F5A84A`, underline, Bold (600)
  - Spacing: 40px between links
- Mobile: Hamburger menu (☰) on right, full-screen overlay when opened

### HPN-FE-004: Featured Services Section (Design Update)
**Updated Acceptance Criteria**:
- Section Title: "What we do" (lowercase "we")
- Background Color: Light Blue `#1B5A9E`
- Text Color: White `#FFFFFF`
- Title Font Size: 32px mobile, 42px desktop, Bold (700)
- Left-aligned title
- Three Service Cards:

**Card 1: Financial Needs Analysis**
- White `#FFFFFF` background, 8px border radius
- Shadow: 0 4px 8px rgba(0,0,0,0.1)
- Image at top (full width, 4:3 aspect ratio)
- Title: Dark Blue `#003D6B`, 20px mobile, 24px desktop, Semi-bold (600)
- Description: Medium Gray `#555555`, 16px, Regular (400), Line height 1.6
- Content: "We can help you with meeting your financial goals, manage risk and plan for future needs such as life insurance coverage, retirement, or debt repayment."

**Card 2: Estate Planning**
- Same styling as Card 1
- Content: "We can help you understand strategies to preserve wealth and ensure financial security for beneficiaries."

**Card 3: Insurance Needs**
- Same styling as Card 1
- Content: "Protecting your family in the event finances will be needed most, and building up wealth for future generations."

**Layout**:
- Mobile: Single column, stacked, 30px gap
- Desktop: 3 columns, equal width, 30px gap
- Hover Effect: Scale(1.03), enhanced shadow, 0.3s transition

### HPN-FE-NEW-001: "Get in Touch" Contact Section
**Priority**: P0 (Critical)  
**Description**: Contact information section with office details and quote.

**Acceptance Criteria**:
- Section Title: "Get in touch" (lowercase "in touch")
- Background Color: Light Blue `#1B5A9E`
- Text Color: White `#FFFFFF`
- Layout: Two-column desktop (50/50), stacked mobile

**Left Column - Contact Info**:
- **Main Office** (subtitle in Light Blue Accent `#7BC8F6`, 18px, Semi-bold)
  - Location: "Mississauga, ON" (White, 16px)
- **Email Address** (subtitle in Light Blue Accent `#7BC8F6`, 18px, Semi-bold)
  - Email: "mitchellbrownfinance@gmail.com" (White, 14px, clickable mailto link)
- **Quote** (Orange `#F5A84A`, 15px, Italic)
  - Text: "Your need of finance is much greater than your need of protection"
  - Attribution: "R. Nelson Nash" (White, 14px, Regular)

**Right Column - Image**:
- Corporate office building photograph
- Border Radius: 8px
- Shadow: 0 4px 12px rgba(0,0,0,0.15)
- Alt text: "Mitchell Brown Financial office building"

### HPN-FE-007: Call-to-Action Section (Updated to Form Section)
**Updated to: Request Free Information Form Section**

**Priority**: P0 (Critical)  
**Description**: Lead capture form section at bottom of homepage.

**Acceptance Criteria**:
- Section Title: "Request Free Information" (Center-aligned, White, 28px mobile, 36px desktop)
- Background Color: Light Blue `#1B5A9E`
- Max Width: 600px (form container)

**Subheadline** (Center-aligned, White, 16px):
- "Thank you for taking this first step to learn more!"

**Description** (Center-aligned, White with 90% opacity, 16px, Line height 1.6):
- "We would love the opportunity to show you what we can offer and how that will benefit you and your family. Looking forward to speaking with you soon."

**Form Fields**:
1. **Name** (required)
   - Placeholder: "Name"
   - White background, 16px text
   - Border: 1px solid `#E5E5E5`
   - Border Radius: 4px
   - Padding: 14px 16px
   - Full width, 48px height

2. **Email** (required)
   - Placeholder: "Email"
   - Same styling as Name field
   - Email format validation

3. **Subject** (optional)
   - Placeholder: "Subject"
   - Same styling as Name field

4. **Message** (required)
   - Placeholder: "Message"
   - Textarea, 150px height
   - Same styling as other fields
   - Vertical resize allowed

**Submit Button**:
- Text: "Submit"
- Background: White `#FFFFFF`
- Text Color: Blue `#0B4F8A`, Semi-bold (600)
- Border Radius: 4px
- Padding: 14px 40px
- Float: Right
- Hover: Orange `#F5A84A` background, White text, 0.3s transition

**Form Behavior**:
- Real-time validation on blur
- Clear error messages in Red `#DC3545`
- Success message after submission
- Loading state with spinner
- CAPTCHA or honeypot for spam prevention

## Responsive Breakpoints (Confirmed)

| Breakpoint | Width | Changes |
|------------|-------|---------|
| Mobile | < 768px | Single column, hamburger menu, stacked sections |
| Tablet | 768px - 1023px | 2-column services, adjusted spacing |
| Desktop | ≥ 1024px | 3-column services, full navigation, side-by-side layouts |

## Performance Requirements (Confirmed)

### Core Web Vitals
- First Contentful Paint (FCP): < 1.5 seconds
- Largest Contentful Paint (LCP): < 2.5 seconds
- Time to Interactive (TTI): < 3.5 seconds
- Cumulative Layout Shift (CLS): < 0.1

### Optimization
- Image lazy loading (below fold)
- WebP format with PNG/JPG fallback
- Minified CSS and JavaScript
- CDN for static assets
- Gzip/Brotli compression

## Accessibility Requirements (Confirmed WCAG 2.1 AA)

### Color Contrast
- All text meets 4.5:1 minimum contrast ratio
- Interactive elements clearly distinguishable
- No color-only information conveyance

### Keyboard Navigation
- All interactive elements keyboard accessible
- Visible focus indicators
- Logical tab order
- Skip to main content link

### Screen Readers
- Semantic HTML structure
- ARIA labels where needed
- Alt text for all images
- Form labels properly associated
- Status announcements for dynamic content

## Implementation Priority

### Phase 1 (MVP - Mobile First)
1. ✅ Design requirements documented
2. ✅ Wireframes created
3. ✅ Mockups completed
4. ⬜ Header/Navigation component
5. ⬜ Hero section component
6. ⬜ Services section component
7. ⬜ Contact section component
8. ⬜ Form section component
9. ⬜ Footer component

### Phase 2 (Desktop Optimization)
1. ⬜ Desktop wireframes
2. ⬜ Desktop mockups
3. ⬜ Responsive grid implementation
4. ⬜ Desktop navigation
5. ⬜ Multi-column layouts

### Phase 3 (Enhancement)
1. ⬜ Animations and transitions
2. ⬜ Image optimization
3. ⬜ Performance optimization
4. ⬜ Accessibility audit
5. ⬜ Cross-browser testing

## Cross-References

### Related Requirements Documents
- Main requirements: `./requirements.md`
- Service showcase: `../service-showcase/requirements.md`
- Contact inquiry: `../contact-inquiry/requirements.md`
- Authentication: `../authentication/requirements.md`

### Design Assets
- Wireframes: `/docs/mobile-wireframe-low-fidelity.svg`
- Mockups: `/docs/mobile-mockup-high-fidelity.svg`
- Screenshots: `/docs/*.png`
- Complete specs: `/docs/homepage-design-requirements.md`
- Design README: `/docs/HOMEPAGE-DESIGN-README.md`

## Notes for Developers

### Content Management
All text content should be:
- Editable via CMS (future requirement)
- Stored in database or configuration
- Easily updatable without code changes

### Image Assets
- Placeholder images in mockups should be replaced with actual photos
- Optimize all images before deployment
- Implement responsive images with srcset
- Use WebP with fallback

### Angular Material Integration
Suggested Material components:
- `mat-toolbar` for header
- `mat-button` for CTAs
- `mat-card` for service cards
- `mat-form-field` and `mat-input` for form
- `mat-icon` for icons

### State Management
- Consider RxJS for form state
- Implement loading states
- Handle error states gracefully
- Store form data temporarily (session storage)

## Approval Status

- ✅ Design requirements: Approved
- ✅ Color palette: Approved
- ✅ Typography: Approved
- ✅ Mobile wireframe: Approved
- ✅ Mobile mockup: Approved
- ⬜ Desktop wireframe: Pending
- ⬜ Desktop mockup: Pending
- ⬜ Interactive prototype: Optional

## Change Log

| Date | Version | Changes | Author |
|------|---------|---------|--------|
| 2026-01-05 | 1.0 | Initial design addendum created | Copilot |
|            |     | - Extracted design specs from mockup | |
|            |     | - Created color palette | |
|            |     | - Defined typography system | |
|            |     | - Updated component specifications | |
|            |     | - Added mobile wireframes and mockups | |

---

## Questions or Clarifications

For any questions regarding these design specifications:
1. Refer to the visual mockups first (`mobile-mockup-high-fidelity.svg`)
2. Check the complete requirements (`homepage-design-requirements.md`)
3. Review the design README (`HOMEPAGE-DESIGN-README.md`)
4. Contact the project owner for final decisions

---

**Document Status**: Approved for Development  
**Last Updated**: 2026-01-05  
**Next Review**: After Phase 1 completion
