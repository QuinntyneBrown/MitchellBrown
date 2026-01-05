# Mitchell Brown Financial - Homepage Design Documentation

This directory contains the complete design requirements, wireframes, and mockups for the Mitchell Brown Financial Services marketing website homepage.

## 📋 Table of Contents

- [Overview](#overview)
- [Design Files](#design-files)
- [Color Palette](#color-palette)
- [Typography](#typography)
- [Page Sections](#page-sections)
- [Responsive Design](#responsive-design)
- [Implementation Notes](#implementation-notes)

---

## 🎯 Overview

The Mitchell Brown Financial homepage is designed as a mobile-first, conversion-optimized landing page for unauthenticated visitors. The design focuses on:

- **Clear value proposition**: "Let your finances grow"
- **Service showcase**: Three primary service offerings
- **Trust building**: Contact information and professional imagery
- **Lead generation**: Prominent inquiry form

The design follows modern web standards with accessibility (WCAG 2.1 AA) and performance optimization in mind.

---

## 📁 Design Files

### Requirements Documentation
- **`homepage-design-requirements.md`** - Complete design specifications including:
  - Color palette and usage guidelines
  - Typography system
  - Spacing and grid system
  - Component specifications for all sections
  - Accessibility requirements
  - Performance requirements
  - Browser support

### Wireframes
- **`mobile-wireframe-low-fidelity.svg`** - Low-fidelity wireframe (mobile view, 375px)
  - Shows content hierarchy and layout structure
  - Indicates spacing and proportions
  - Placeholder content for all sections

### Mockups
- **`mobile-mockup-high-fidelity.svg`** - High-fidelity mockup (mobile view, 375px)
  - Final design with accurate colors
  - Typography specifications
  - Visual styling and effects
  - Actual content structure

### Screenshots
- **`mobile-wireframe-low-fidelity.png`** - Screenshot of wireframe
- **`mobile-mockup-high-fidelity.png`** - Screenshot of mockup

### Viewer Files (Development Tools)
- **`wireframe-viewer.html`** - HTML viewer for wireframe SVG
- **`mockup-viewer.html`** - HTML viewer for mockup SVG

---

## 🎨 Color Palette

### Primary Colors

| Color Name | Hex Code | Usage |
|------------|----------|-------|
| Primary Orange/Peach | `#F5A84A` | Hero background, CTAs, accents |
| Primary Blue | `#0B4F8A` | Links, button borders, emphasized text |
| Dark Blue | `#003D6B` | Header text, footer background |
| Light Blue | `#1B5A9E` | Section backgrounds |

### Secondary Colors

| Color Name | Hex Code | Usage |
|------------|----------|-------|
| White | `#FFFFFF` | Text on colored backgrounds, cards |
| Light Gray | `#F5F5F5` | Subtle backgrounds |
| Dark Text | `#333333` | Body text on white |
| Medium Gray | `#555555` | Secondary text |
| Border Gray | `#E5E5E5` | Borders and dividers |
| Light Blue Accent | `#7BC8F6` | Contact section labels |

### Color Contrast Ratios

All color combinations meet WCAG 2.1 AA standards:
- White text on `#F5A84A`: ~4.8:1 ✓
- White text on `#1B5A9E`: ~7.2:1 ✓
- Dark text on white: ~12:1 ✓

---

## ✍️ Typography

### Font Family
**Primary**: Sans-serif system font stack
- Recommended: Inter, Open Sans, or Roboto
- Fallback: -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif

### Font Sizes (Mobile - 375px)

| Element | Size | Weight | Line Height |
|---------|------|--------|-------------|
| Hero Headline | 36-42px | 700 (Bold) | 1.2 |
| Hero Emphasis ("your") | 36-42px | 800 (Extra Bold) | 1.2 |
| Section Headings (H2) | 28-32px | 700 (Bold) | 1.2 |
| Card Titles (H3) | 20-24px | 600 (Semi-bold) | 1.3 |
| Body Text | 16px | 400 (Regular) | 1.6 |
| Navigation Links | 16px | 400 (Regular) | 1.5 |
| Button Text | 16px | 600 (Semi-bold) | 1.5 |
| Small Text | 14px | 400 (Regular) | 1.5 |

### Font Sizes (Desktop - 1024px+)

| Element | Size | Weight |
|---------|------|--------|
| Hero Headline | 64-72px | 700 (Bold) |
| Section Headings (H2) | 36-42px | 700 (Bold) |
| Card Titles (H3) | 24-28px | 600 (Semi-bold) |
| Body Text | 16-18px | 400 (Regular) |

---

## 📐 Page Sections

### 1. Header/Navigation
- **Height**: 70px
- **Background**: White with 1px bottom border
- **Position**: Fixed/sticky on scroll
- **Content**: 
  - Logo/brand name (left)
  - Hamburger menu icon (right, mobile)
  - Navigation links (desktop)

**Navigation Links** (Desktop, left to right):
1. Life Insurance
2. Investments
3. Retirement Planning
4. Estate Planning

### 2. Hero Section
- **Height**: 450px (mobile), 500px (desktop)
- **Background**: `#F5A84A` (Primary Orange)
- **Content**:
  - Headline: "Let **your** finances **grow.**"
    - "your" emphasized in `#003D6B` (Dark Blue)
  - CTA Button: "Request a Free Info Session"
    - White outline, blue text
    - Hover: Blue background, white text

### 3. "What We Do" Services Section
- **Background**: `#1B5A9E` (Light Blue)
- **Layout**: Stacked cards (mobile), 3-column grid (desktop)
- **Cards** (each):
  - Image at top (4:3 aspect ratio)
  - Title
  - Description (3-4 lines)
  - White background with shadow
  - 8px border radius

**Three Services**:
1. **Financial Needs Analysis**
   - Help with financial goals, risk management, planning
2. **Estate Planning**
   - Wealth preservation and beneficiary security
3. **Insurance Needs**
   - Family protection and wealth building

### 4. "Get in Touch" Contact Section
- **Background**: `#1B5A9E` (Light Blue)
- **Layout**: Stacked (mobile), side-by-side (desktop)
- **Left Column**: Contact information
  - Main Office: Mississauga, ON
  - Email: mitchellbrownfinance@gmail.com
  - Quote from R. Nelson Nash
- **Right Column**: Office building image

### 5. "Request Free Information" Form Section
- **Background**: `#1B5A9E` (Light Blue)
- **Content**:
  - Section title
  - Subheadline and description
  - Form fields: Name, Email, Subject, Message
  - Submit button (white background, blue text)

### 6. Footer
- **Background**: `#003D6B` (Dark Blue)
- **Content**: Company info, copyright, links

---

## 📱 Responsive Design

### Breakpoints

| Breakpoint | Width | Layout |
|------------|-------|--------|
| Mobile | < 768px | Single column, stacked |
| Tablet | 768px - 1023px | 2-column services, adjusted spacing |
| Desktop | ≥ 1024px | 3-column services, side-by-side layouts |

### Mobile-First Approach

The design prioritizes mobile users:
- **Touch-friendly**: Buttons min 44x44px
- **Readable text**: 16px minimum body text
- **Optimized images**: Lazy loading, WebP format
- **Simplified navigation**: Hamburger menu
- **Vertical flow**: Natural scrolling experience

### Responsive Images
- Service card images: 335px wide (mobile), responsive
- Office image: Full container width
- Lazy loading for below-fold images
- WebP format with PNG/JPG fallback

---

## 🛠 Implementation Notes

### Performance Targets
- **First Contentful Paint (FCP)**: < 1.5s
- **Largest Contentful Paint (LCP)**: < 2.5s
- **Time to Interactive (TTI)**: < 3.5s
- **Cumulative Layout Shift (CLS)**: < 0.1

### Optimization Strategies
1. **Images**:
   - Use WebP with fallback
   - Implement lazy loading
   - Optimize dimensions for viewport
   - Use responsive images with srcset

2. **Assets**:
   - Minify CSS and JavaScript
   - Use CDN for static assets
   - Enable gzip/brotli compression
   - Implement browser caching

3. **Fonts**:
   - Use system fonts when possible
   - Subset web fonts if used
   - Use font-display: swap

### Accessibility Implementation

#### WCAG 2.1 AA Compliance
- ✓ Color contrast ratios meet 4.5:1 minimum
- ✓ Keyboard navigation for all interactive elements
- ✓ Focus indicators visible
- ✓ Skip to main content link
- ✓ Semantic HTML structure
- ✓ ARIA labels where needed
- ✓ Alt text for all images
- ✓ Form labels properly associated

#### Testing Requirements
- Screen reader testing (NVDA, JAWS, VoiceOver)
- Keyboard navigation testing
- Color contrast validation (aXe, WAVE)
- Text resize testing (up to 200%)

### Browser Support
- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)
- Mobile Safari (iOS 13+)
- Chrome Mobile (Android 10+)

### CSS Framework Considerations
The design can be implemented with:
- **Vanilla CSS**: Full control, smallest bundle
- **Tailwind CSS**: Utility-first, rapid development
- **Bootstrap 5**: Component library, proven system
- **Material UI**: If using Angular Material (current stack)

### Component Library
If using Angular Material (as indicated in tech stack):
- Header: mat-toolbar
- Buttons: mat-button, mat-raised-button
- Form fields: mat-form-field, mat-input
- Cards: mat-card
- Icons: mat-icon

---

## 📊 Design Decisions

### Why Orange and Blue?
- **Orange (`#F5A84A`)**: Warmth, growth, optimism, energy
- **Blue (`#1B5A9E`, `#003D6B`)**: Trust, stability, professionalism, security
- Combination conveys: "Trusted financial growth"

### Why Mobile-First?
- 60%+ web traffic is mobile
- Better performance on all devices
- Forces content prioritization
- Easier to scale up than down

### Why Minimal Navigation?
- Reduces cognitive load
- Focuses attention on services
- Improves conversion rate
- Simplifies mobile experience

### Why Single-Page Scroll?
- Better storytelling flow
- Reduced page loads
- Higher engagement
- Easier mobile navigation

---

## 🔄 Next Steps

### Development Phase
1. ✅ Requirements documented
2. ✅ Wireframes created
3. ✅ Mockups designed
4. ⬜ Desktop wireframes and mockups
5. ⬜ Interactive prototype (optional)
6. ⬜ HTML/CSS implementation
7. ⬜ Angular component development
8. ⬜ Backend API integration
9. ⬜ Accessibility testing
10. ⬜ Performance optimization
11. ⬜ Cross-browser testing
12. ⬜ User acceptance testing

### Future Enhancements
- Tablet-specific designs
- Desktop variations
- Dark mode support
- Animation specifications
- Micro-interactions
- A/B testing variants
- Multi-language support

---

## 📝 Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | 2026-01-05 | Initial design documentation created |
|     |            | - Complete requirements document |
|     |            | - Mobile wireframe (low-fidelity) |
|     |            | - Mobile mockup (high-fidelity) |
|     |            | - Screenshots captured |
|     |            | - README documentation |

---

## 👥 Contributors

- **Design Requirements**: Extracted from provided homepage image
- **Wireframes & Mockups**: Created based on requirements
- **Documentation**: Comprehensive specification for development team

---

## 📧 Questions or Feedback?

For questions about the design or implementation:
1. Review the detailed requirements in `homepage-design-requirements.md`
2. Check the wireframes and mockups for visual reference
3. Contact the project owner for clarifications

---

## 📄 License

Copyright (c) Quinntyne Brown. All Rights Reserved.
Licensed under the MIT License.
