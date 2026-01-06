import { test, expect } from '@playwright/test';

test.describe('Home Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
  });

  test('should load the home page', async ({ page }) => {
    // Check that the page title is present
    await expect(page).toHaveTitle(/MitchellBrownWebApp/);
  });

  test('should have app-root element', async ({ page }) => {
    // Check for app-root component
    const appRoot = page.locator('app-root');
    await expect(appRoot).toBeAttached();
  });

  test('should have header component with navigation', async ({ page }) => {
    // Check that header component is in the DOM
    const header = page.locator('app-header');
    await expect(header).toBeAttached();
    
    // Check navigation links
    await expect(page.getByRole('link', { name: 'Life Insurance' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Investments' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Retirement Planning' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Estate Planning' })).toBeVisible();
  });

  test('should display hero section with correct content', async ({ page }) => {
    // Check hero headline
    const headline = page.getByRole('heading', { name: /Let.*your.*finances.*grow/i, level: 1 });
    await expect(headline).toBeVisible();
    
    // Check CTA button
    const ctaButton = page.getByRole('button', { name: 'Request a Free Info Session' });
    await expect(ctaButton).toBeVisible();
  });

  test('should display services section with three cards', async ({ page }) => {
    // Check services section title
    const servicesTitle = page.getByRole('heading', { name: 'What we do', level: 2 });
    await expect(servicesTitle).toBeVisible();
    
    // Check service cards
    await expect(page.getByRole('heading', { name: 'Financial Needs Analysis', level: 3 })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Estate Planning', level: 3 })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Insurance Needs', level: 3 })).toBeVisible();
    
    // Check that images are present
    await expect(page.getByAltText('Financial Needs Analysis')).toBeVisible();
    await expect(page.getByAltText('Estate Planning')).toBeVisible();
    await expect(page.getByAltText('Insurance Needs')).toBeVisible();
  });

  test('should display contact section', async ({ page }) => {
    // Check contact section title
    const contactTitle = page.getByRole('heading', { name: 'Get in touch', level: 2 });
    await expect(contactTitle).toBeVisible();
    
    // Check contact information
    await expect(page.getByText('Main Office')).toBeVisible();
    await expect(page.getByText('Mississauga, ON')).toBeVisible();
    await expect(page.getByText('Email Address')).toBeVisible();
    await expect(page.getByRole('link', { name: /mitchellbrownfinance@gmail.com/i })).toBeVisible();
    
    // Check quote
    await expect(page.getByText(/Your need of finance is much greater/i)).toBeVisible();
    await expect(page.getByText('R. Nelson Nash')).toBeVisible();
  });

  test('should display inquiry form with all fields', async ({ page }) => {
    // Check form section title
    const formTitle = page.getByRole('heading', { name: 'Request Free Information', level: 2 });
    await expect(formTitle).toBeVisible();
    
    // Check form fields using role
    const nameInput = page.getByRole('textbox', { name: 'Name' });
    const emailInput = page.getByRole('textbox', { name: 'Email' });
    const subjectInput = page.getByRole('textbox', { name: 'Subject' });
    const messageInput = page.getByRole('textbox', { name: 'Message' });
    
    await expect(nameInput).toBeVisible();
    await expect(emailInput).toBeVisible();
    await expect(subjectInput).toBeVisible();
    await expect(messageInput).toBeVisible();
    
    // Check submit button is disabled when form is empty
    const submitButton = page.getByRole('button', { name: 'Submit' });
    await expect(submitButton).toBeVisible();
    await expect(submitButton).toBeDisabled();
  });

  test('should enable submit button when form is filled', async ({ page }) => {
    // Fill in form fields using role
    await page.getByRole('textbox', { name: 'Name' }).fill('John Doe');
    await page.getByRole('textbox', { name: 'Email' }).fill('john.doe@example.com');
    await page.getByRole('textbox', { name: 'Subject' }).fill('Life Insurance Inquiry');
    await page.getByRole('textbox', { name: 'Message' }).fill('I would like to learn more about life insurance options.');
    
    // Check submit button is enabled
    const submitButton = page.getByRole('button', { name: 'Submit' });
    await expect(submitButton).toBeEnabled();
  });

  test('hero CTA button should scroll to form section', async ({ page }) => {
    // Click the hero CTA button
    const ctaButton = page.getByRole('button', { name: 'Request a Free Info Session' });
    await ctaButton.click();
    
    // Wait a bit for scroll animation
    await page.waitForTimeout(500);
    
    // Check that form section is in viewport
    const formSection = page.locator('#request-info');
    await expect(formSection).toBeInViewport();
  });

  test('should display footer', async ({ page }) => {
    // Scroll to footer
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    
    // Check footer content
    await expect(page.getByText(/© 2026 Mitchell Brown Financial/i)).toBeVisible();
  });
});

test.describe('Home Page - Mobile Responsive', () => {
  test.use({ viewport: { width: 375, height: 812 } });

  test('should display correctly on mobile', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    // Check hero section
    const headline = page.getByRole('heading', { name: /Let.*your.*finances.*grow/i });
    await expect(headline).toBeVisible();
    
    // Check services are stacked vertically
    const servicesTitle = page.getByRole('heading', { name: 'What we do' });
    await expect(servicesTitle).toBeVisible();
    
    // Check form is visible
    const formTitle = page.getByRole('heading', { name: 'Request Free Information' });
    await expect(formTitle).toBeVisible();
  });

  test('mobile header should have hamburger menu button', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    // Check for menu toggle button (hamburger)
    const menuButton = page.getByRole('button', { name: /toggle navigation/i });
    await expect(menuButton).toBeVisible();
  });
});

test.describe('Home Page - Tablet Responsive', () => {
  test.use({ viewport: { width: 768, height: 1024 } });

  test('should display correctly on tablet', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    // Check all sections are visible
    await expect(page.getByRole('heading', { name: /Let.*your.*finances.*grow/i })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'What we do' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Get in touch' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Request Free Information' })).toBeVisible();
  });
});

test.describe('Home Page - Desktop Responsive', () => {
  test.use({ viewport: { width: 1440, height: 900 } });

  test('should display correctly on desktop', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    // Check desktop navigation is visible
    await expect(page.getByRole('link', { name: 'Life Insurance' })).toBeVisible();
    
    // Check all sections are visible
    await expect(page.getByRole('heading', { name: /Let.*your.*finances.*grow/i })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'What we do' })).toBeVisible();
    
    // Check service cards are displayed in a row (3 columns)
    await expect(page.getByRole('heading', { name: 'Financial Needs Analysis' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Estate Planning' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Insurance Needs' })).toBeVisible();
  });
});
