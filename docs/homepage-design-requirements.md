# Homepage Design Requirements

## Overview
This document details the design and functional requirements for the Mitchell Brown Financial Services marketing website homepage. The homepage is the primary landing page for unauthenticated visitors and serves as the main entry point for potential customers.

## Design System

### Color Palette

#### Primary Colors
- **Primary Orange/Peach**: `#F5A84A` (hero background, accents, CTAs)
- **Primary Blue**: `#0B4F8A` (sections, text on orange, links)
- **Dark Blue**: `#003D6B` (footer, header text)

#### Secondary Colors
- **Light Blue Background**: `#1B5A9E` (section backgrounds)
- **White**: `#FFFFFF` (text on colored backgrounds, card backgrounds)
- **Light Gray**: `#F5F5F5` (subtle backgrounds)
- **Dark Text**: `#333333` (body text on white)

#### Usage Guidelines
- Orange/Peach: Hero sections, primary CTAs, important highlights
- Dark Blue: Main content sections, secondary backgrounds
- White: Text on colored backgrounds, card content
- Blue text: Links, headings on orange background

### Typography

#### Font Families
- **Primary Font**: Sans-serif (Modern, clean typeface - suggest Inter, Open Sans, or Roboto)
- **Headings**: Bold weight (700)
- **Body Text**: Regular weight (400)
- **Emphasis**: Semi-bold weight (600)

#### Font Sizes (Desktop)
- **Hero Headline**: 64px-72px, Bold
- **Section Headings (H2)**: 36px-42px, Bold
- **Card Titles (H3)**: 24px-28px, Semi-bold
- **Body Text**: 16px-18px, Regular
- **Navigation Links**: 16px, Regular
- **Button Text**: 16px-18px, Semi-bold

#### Font Sizes (Mobile)
- **Hero Headline**: 36px-42px, Bold
- **Section Headings (H2)**: 28px-32px, Bold
- **Card Titles (H3)**: 20px-24px, Semi-bold
- **Body Text**: 16px, Regular
- **Navigation Links**: 16px, Regular
- **Button Text**: 16px, Semi-bold

#### Line Heights
- Headings: 1.2
- Body text: 1.6
- Buttons: 1.5

### Spacing System

#### Grid System
- **Container Max Width**: 1200px
- **Mobile Padding**: 20px
- **Tablet Padding**: 40px
- **Desktop Padding**: 60px

#### Component Spacing
- **Section Padding (Vertical)**: 80px desktop, 60px mobile
- **Card Spacing**: 30px gap between cards
- **Element Margins**: 16px, 24px, 32px, 48px (multiples of 8)

### Border Radius
- **Buttons**: 4px
- **Cards**: 8px
- **Images**: 4px
- **Input Fields**: 4px

## Page Structure

The homepage consists of the following sections in order:

1. Header/Navigation Bar
2. Hero Section
3. "What We Do" Services Section
4. "Get in Touch" Contact Section
5. "Request Free Information" Form Section
6. Footer

---

## 1. Header / Navigation Bar

### Visual Design

#### Layout
- **Position**: Fixed/Sticky at top of page
- **Background Color**: White (`#FFFFFF`)
- **Height**: 70px
- **Border Bottom**: 1px solid #E5E5E5
- **Box Shadow**: Subtle shadow on scroll (0 2px 4px rgba(0,0,0,0.1))

#### Desktop Layout (≥768px)
- Logo/Brand name on the left
- Navigation links horizontally aligned to the right
- Even spacing between navigation items

#### Mobile Layout (<768px)
- Logo/Brand name on the left
- Hamburger menu icon on the right
- Full-screen menu overlay when opened

### Content

#### Brand/Logo
- **Text**: "Mitchell Brown Financial" or logo image
- **Color**: Dark Blue `#003D6B`
- **Font Size**: 20px-24px
- **Font Weight**: Bold (700)
- **Position**: Left-aligned, 20px from edge

#### Navigation Links
The header includes the following navigation items:

**Left Side Navigation:**
1. **Life Insurance**
   - Link URL: `/services/life-insurance`
   - Color: Dark Blue `#0B4F8A`
   
2. **Investments**
   - Link URL: `/services/investments`
   - Color: Dark Blue `#0B4F8A`

**Right Side Navigation:**
3. **Retirement Planning**
   - Link URL: `/services/retirement-planning`
   - Color: Dark Blue `#0B4F8A`
   
4. **Estate Planning**
   - Link URL: `/services/estate-planning`
   - Color: Dark Blue `#0B4F8A`

#### Link Styling
- **Default State**: Dark Blue `#0B4F8A`
- **Hover State**: Primary Orange `#F5A84A`, underline
- **Active State**: Bold, Primary Orange
- **Font Size**: 16px
- **Font Weight**: Regular (400), Bold (600) on hover
- **Spacing**: 40px between links

### Behavior

#### Sticky Header
- Header remains visible when scrolling down
- Smooth transition to sticky state
- Background becomes opaque on scroll
- Shadow appears on scroll

#### Mobile Menu
- Hamburger icon (☰) on mobile
- Tap to open full-screen overlay menu
- Vertical list of navigation items
- Close button (✕) in top-right
- Smooth slide-in animation
- Backdrop dimming (rgba(0,0,0,0.5))

### Accessibility
- Skip to main content link
- Keyboard navigation support
- ARIA labels for mobile menu
- Focus indicators on all interactive elements

---

## 2. Hero Section

### Visual Design

#### Layout
- **Background Color**: Primary Orange/Peach `#F5A84A`
- **Height**: 500px desktop, 450px mobile
- **Text Alignment**: Center
- **Content**: Vertically and horizontally centered

#### Background
- Solid color background (no image in reference)
- Option for gradient overlay: Linear gradient from `#F5A84A` to `#FFB86B`
- Clean, minimalist design

### Content

#### Headline
**Text**: "Let **your** finances **grow.**"

**Typography**:
- **Font Size**: 64px-72px desktop, 36px-42px mobile
- **Font Weight**: 
  - "Let", "finances", "grow." - Bold (700)
  - "**your**" - Bolder/Emphasized (800-900), darker blue `#003D6B`
- **Color**: White `#FFFFFF` for most text, Blue `#003D6B` for "your"
- **Line Height**: 1.2
- **Letter Spacing**: -0.5px

**Styling Notes**:
- "your" is emphasized in a contrasting blue color to draw attention
- Word "grow" includes period for friendly, conversational tone
- Multi-line display: "Let your" on line 1, "finances" on line 2, "grow." on line 3

#### Call-to-Action Button
**Text**: "Request a Free Info Session"

**Button Styling**:
- **Background**: Transparent/White outline
- **Border**: 2px solid Blue `#0B4F8A`
- **Text Color**: Blue `#0B4F8A`
- **Font Size**: 16px-18px
- **Font Weight**: Semi-bold (600)
- **Padding**: 14px 32px
- **Border Radius**: 4px
- **Cursor**: Pointer

**Hover State**:
- **Background**: Blue `#0B4F8A`
- **Text Color**: White `#FFFFFF`
- **Border**: 2px solid Blue `#0B4F8A`
- **Transition**: Smooth 0.3s ease

**Button Position**:
- Centered below headline
- **Margin Top**: 40px from headline

### Behavior
- Fade-in animation on page load
- Button hover effects
- Smooth scroll to form section when clicked

### Accessibility
- Sufficient color contrast (WCAG AA)
- Clear focus indicators
- Descriptive button text

---

## 3. "What We Do" Services Section

### Visual Design

#### Layout
- **Background Color**: Dark Blue `#1B5A9E`
- **Padding**: 80px vertical, 60px mobile
- **Text Color**: White `#FFFFFF`

#### Section Header
- **Title**: "What we do"
- **Font Size**: 42px desktop, 32px mobile
- **Font Weight**: Bold (700)
- **Color**: White `#FFFFFF`
- **Alignment**: Left-aligned
- **Margin Bottom**: 48px

#### Service Cards Grid
- **Layout**: 3 columns on desktop, 1 column on mobile
- **Gap**: 30px between cards
- **Card Background**: White `#FFFFFF`
- **Card Border Radius**: 8px
- **Card Padding**: 0 (image full-width at top)
- **Card Shadow**: 0 4px 8px rgba(0,0,0,0.1)

### Content

The section displays three service cards:

#### Card 1: Financial Needs Analysis

**Image**:
- Photo of hands reviewing financial documents
- Aspect Ratio: 4:3 or 16:9
- Position: Top of card, full-width
- **Alt text**: "Financial advisor reviewing documents with client"

**Card Content**:
- **Title**: "Financial Needs Analysis"
  - Font Size: 24px
  - Font Weight: Semi-bold (600)
  - Color: Dark Blue `#003D6B`
  - Padding: 20px horizontal, 16px top

- **Description**: "We can help you with meeting your financial goals, manage risk and plan for future needs such as life insurance coverage, retirement, or debt repayment."
  - Font Size: 16px
  - Font Weight: Regular (400)
  - Color: Dark Gray `#555555`
  - Line Height: 1.6
  - Padding: 0 20px 24px 20px

#### Card 2: Estate Planning

**Image**:
- Photo of hands using calculator with financial charts
- Aspect Ratio: 4:3 or 16:9
- Position: Top of card, full-width
- **Alt text**: "Estate planning calculation with financial charts"

**Card Content**:
- **Title**: "Estate Planning"
  - Font Size: 24px
  - Font Weight: Semi-bold (600)
  - Color: Dark Blue `#003D6B`
  - Padding: 20px horizontal, 16px top

- **Description**: "We can help you understand strategies to preserve wealth and ensure financial security for beneficiaries."
  - Font Size: 16px
  - Font Weight: Regular (400)
  - Color: Dark Gray `#555555`
  - Line Height: 1.6
  - Padding: 0 20px 24px 20px

#### Card 3: Insurance Needs

**Image**:
- Photo of business professional working with documents
- Aspect Ratio: 4:3 or 16:9
- Position: Top of card, full-width
- **Alt text**: "Insurance planning consultation"

**Card Content**:
- **Title**: "Insurance Needs"
  - Font Size: 24px
  - Font Weight: Semi-bold (600)
  - Color: Dark Blue `#003D6B`
  - Padding: 20px horizontal, 16px top

- **Description**: "Protecting your family in the event finances will be needed most, and building up wealth for future generations."
  - Font Size: 16px
  - Font Weight: Regular (400)
  - Color: Dark Gray `#555555`
  - Line Height: 1.6
  - Padding: 0 20px 24px 20px

### Behavior

#### Hover Effects
- Slight scale transform: `scale(1.03)`
- Shadow enhancement: `0 8px 16px rgba(0,0,0,0.15)`
- Smooth transition: 0.3s ease
- Cursor: pointer (cards are clickable)

#### Responsive Behavior
- Desktop (≥1024px): 3 columns
- Tablet (768px-1023px): 2 columns
- Mobile (<768px): 1 column, stacked

#### Card Interactions
- Each card links to respective service detail page
- Full card is clickable
- Maintain accessibility for keyboard navigation

### Accessibility
- Alt text for all images
- Sufficient contrast ratios
- Keyboard navigation support
- Focus indicators

---

## 4. "Get in Touch" Contact Section

### Visual Design

#### Layout
- **Background Color**: Dark Blue `#1B5A9E` (same as services section) OR separate section with light background
- **Padding**: 80px vertical desktop, 60px mobile
- **Layout**: Two-column on desktop, stacked on mobile

#### Left Column: Contact Information
- **Width**: 50% desktop, 100% mobile
- **Text Color**: White `#FFFFFF`
- **Padding**: 40px

#### Right Column: Image
- **Width**: 50% desktop, 100% mobile
- **Image**: Corporate building/office exterior

### Content

#### Section Title
- **Text**: "Get in touch"
- **Font Size**: 42px desktop, 32px mobile
- **Font Weight**: Bold (700)
- **Color**: White `#FFFFFF`
- **Margin Bottom**: 32px

#### Main Office Subsection
- **Subtitle**: "Main Office"
- **Font Size**: 20px
- **Font Weight**: Semi-bold (600)
- **Color**: Light Blue `#7BC8F6`
- **Margin Bottom**: 8px

- **Location**: "Mississauga, ON"
- **Font Size**: 18px
- **Font Weight**: Regular (400)
- **Color**: White `#FFFFFF`
- **Margin Bottom**: 32px

#### Email Address Subsection
- **Subtitle**: "Email Address"
- **Font Size**: 20px
- **Font Weight**: Semi-bold (600)
- **Color**: Light Blue `#7BC8F6`
- **Margin Bottom**: 8px

- **Email**: "mitchellbrownfinance@gmail.com"
- **Font Size**: 18px
- **Font Weight**: Regular (400)
- **Color**: White `#FFFFFF`
- **Link**: mailto:mitchellbrownfinance@gmail.com
- **Hover**: Underline

#### Quote
- **Text**: "Your need of finance is much greater than your need of protection"
- **Attribution**: "R. Nelson Nash"
- **Font Size**: 18px quote, 16px attribution
- **Font Weight**: Italic for quote, Regular for attribution
- **Color**: Orange `#F5A84A` for quote, White for attribution
- **Margin Top**: 48px
- **Styling**: Quotation marks included

#### Right Column Image
- **Image**: Modern corporate office building against blue sky
- **Alt Text**: "Mitchell Brown Financial office building"
- **Border Radius**: 8px
- **Object Fit**: Cover
- **Aspect Ratio**: 4:3
- **Shadow**: 0 4px 12px rgba(0,0,0,0.15)

### Responsive Behavior
- Desktop: Side-by-side layout (50/50 split)
- Tablet: Side-by-side with adjusted proportions
- Mobile: Stacked (contact info first, then image)

### Accessibility
- Click-to-email functionality
- Screen reader friendly
- Sufficient color contrast
- Alt text for image

---

## 5. "Request Free Information" Form Section

### Visual Design

#### Layout
- **Background Color**: Dark Blue `#1B5A9E`
- **Padding**: 80px vertical desktop, 60px mobile
- **Content Alignment**: Center
- **Max Width**: 600px (form container)

#### Section Header
- **Title**: "Request Free Information"
- **Font Size**: 36px desktop, 28px mobile
- **Font Weight**: Bold (700)
- **Color**: White `#FFFFFF`
- **Alignment**: Center
- **Margin Bottom**: 24px

#### Subheadline
- **Text**: "Thank you for taking this first step to learn more!"
- **Font Size**: 18px
- **Font Weight**: Regular (400)
- **Color**: White `#FFFFFF`
- **Alignment**: Center
- **Margin Bottom**: 8px

#### Description
- **Text**: "We would love the opportunity to show you what we can offer and how that will benefit you and your family. Looking forward to speaking with you soon."
- **Font Size**: 16px
- **Font Weight**: Regular (400)
- **Color**: White `#FFFFFF` with slight transparency (0.9)
- **Alignment**: Center
- **Line Height**: 1.6
- **Margin Bottom**: 40px
- **Max Width**: 700px

### Form Content

#### Form Fields
The form includes the following fields in order:

1. **Name Field**
   - **Label**: None (placeholder text)
   - **Placeholder**: "Name"
   - **Type**: Text input
   - **Required**: Yes
   - **Background**: White `#FFFFFF`
   - **Border**: 1px solid #E5E5E5
   - **Border Radius**: 4px
   - **Padding**: 14px 16px
   - **Font Size**: 16px
   - **Width**: 100%
   - **Margin Bottom**: 16px

2. **Email Field**
   - **Label**: None (placeholder text)
   - **Placeholder**: "Email"
   - **Type**: Email input
   - **Required**: Yes
   - **Background**: White `#FFFFFF`
   - **Border**: 1px solid #E5E5E5
   - **Border Radius**: 4px
   - **Padding**: 14px 16px
   - **Font Size**: 16px
   - **Width**: 100%
   - **Margin Bottom**: 16px

3. **Subject Field**
   - **Label**: None (placeholder text)
   - **Placeholder**: "Subject"
   - **Type**: Text input
   - **Required**: No
   - **Background**: White `#FFFFFF`
   - **Border**: 1px solid #E5E5E5
   - **Border Radius**: 4px
   - **Padding**: 14px 16px
   - **Font Size**: 16px
   - **Width**: 100%
   - **Margin Bottom**: 16px

4. **Message Field**
   - **Label**: None (placeholder text)
   - **Placeholder**: "Message"
   - **Type**: Textarea
   - **Required**: Yes
   - **Background**: White `#FFFFFF`
   - **Border**: 1px solid #E5E5E5
   - **Border Radius**: 4px
   - **Padding**: 14px 16px
   - **Font Size**: 16px
   - **Width**: 100%
   - **Height**: 150px
   - **Margin Bottom**: 24px
   - **Resize**: Vertical

#### Submit Button
- **Text**: "Submit"
- **Background**: White `#FFFFFF`
- **Text Color**: Dark Blue `#0B4F8A`
- **Border**: None
- **Border Radius**: 4px
- **Padding**: 14px 40px
- **Font Size**: 16px
- **Font Weight**: Semi-bold (600)
- **Width**: Auto (centered)
- **Float**: Right
- **Cursor**: Pointer

**Hover State**:
- **Background**: Primary Orange `#F5A84A`
- **Text Color**: White `#FFFFFF`
- **Transition**: 0.3s ease

**Active/Loading State**:
- **Background**: Light Gray (disabled state)
- **Text**: "Submitting..." with spinner
- **Cursor**: Wait

### Form Behavior

#### Validation
- Real-time validation on field blur
- Email format validation
- Required field checking
- Error messages below fields in red
- Success message on successful submission

#### Error States
- **Border Color**: Red `#DC3545`
- **Error Message Color**: Red `#DC3545`
- **Error Icon**: ❌ or warning icon
- **Error Text**: Clear, actionable messages

#### Success State
- Form replaced with success message
- Success icon: ✓
- Message: "Thank you! We'll be in touch soon."
- Confirmation email sent to user

#### Accessibility
- All fields have associated labels (visible or aria-label)
- Clear focus indicators
- Keyboard navigation support
- Screen reader compatible
- ARIA live regions for error messages

---

## 6. Footer (Brief)

### Content
- Company name and copyright
- Social media links
- Privacy policy link
- Terms of service link
- Contact information
- Background: Dark Blue `#003D6B`
- Text Color: White with some transparency

---

## Responsive Breakpoints

### Desktop
- **Min Width**: 1024px
- Three-column service cards
- Side-by-side contact section
- Full navigation menu

### Tablet
- **Width**: 768px - 1023px
- Two-column service cards
- Adjusted padding and font sizes
- Full navigation menu

### Mobile
- **Max Width**: 767px
- Single column layout
- Stacked service cards
- Hamburger menu
- Touch-optimized buttons (min 44x44px)
- Increased padding for readability

---

## Performance Requirements

### Loading Times
- **First Contentful Paint (FCP)**: < 1.5 seconds
- **Largest Contentful Paint (LCP)**: < 2.5 seconds
- **Time to Interactive (TTI)**: < 3.5 seconds
- **Cumulative Layout Shift (CLS)**: < 0.1

### Optimization
- Image lazy loading (below fold)
- WebP format with PNG/JPG fallback
- Minified CSS and JavaScript
- Compressed assets
- CDN delivery for static assets

---

## Accessibility Requirements (WCAG 2.1 Level AA)

### Color Contrast
- Text on orange background: Minimum 4.5:1 ratio
- Text on blue background: Minimum 4.5:1 ratio
- Interactive elements clearly distinguishable

### Keyboard Navigation
- All interactive elements reachable via keyboard
- Visible focus indicators
- Logical tab order
- Skip to main content link

### Screen Readers
- Semantic HTML structure
- ARIA labels where needed
- Alt text for all images
- Form labels properly associated
- Status messages announced

### Visual
- Text resizable up to 200%
- No content lost when zoomed
- Clear focus indicators
- No color-only information conveyance

---

## Browser Support

### Supported Browsers
- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)
- Mobile Safari (iOS 13+)
- Chrome Mobile (Android 10+)

---

## Future Enhancements
- Video background option for hero
- Animation on scroll effects
- Testimonial carousel
- Live chat integration
- Dark mode toggle
- Progressive Web App (PWA) capabilities
- Multi-language support
