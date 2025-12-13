import { test, expect } from '@playwright/test';

test.describe('Home Page', () => {
  test('should load the home page', async ({ page }) => {
    await page.goto('/');
    
    // Wait for the page to load
    await page.waitForLoadState('networkidle');
    
    // Check that the page title is present
    await expect(page).toHaveTitle(/MitchellBrownWebApp/);
  });

  test('should have app-root element', async ({ page }) => {
    await page.goto('/');
    
    // Wait for the page to load
    await page.waitForLoadState('networkidle');
    
    // Check for app-root component
    const appRoot = page.locator('app-root');
    await expect(appRoot).toBeAttached();
  });

  test('should have header component in DOM', async ({ page }) => {
    await page.goto('/');
    
    // Wait for the page to load
    await page.waitForLoadState('networkidle');
    
    // Check that header component is in the DOM
    const header = page.locator('app-header');
    await expect(header).toBeAttached();
  });
});
