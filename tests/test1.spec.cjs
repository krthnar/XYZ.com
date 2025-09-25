import { test, expect } from '@playwright/test';

test.describe('Navbar component', () => {
  test.beforeEach(async ({ page }) => {
    // Go to homepage 
    await page.goto('http://localhost:5173/');
  });

  test('should display the company logo', async ({ page }) => {
    const logo = page.locator('img[alt="Company Logo"]');
    await expect(logo).toBeVisible();
  });

  test('should navigate when clicking ABOUT link', async ({ page }) => {
    await page.click('text=ABOUT');
    await expect(page).toHaveURL(/about/);
  });

  test('should open and close desktop search', async ({ page }) => {
    // Open search
    await page.click('button:has(svg)');
    const searchInput = page.locator('input[placeholder="Search content..."]');
    await expect(searchInput).toBeVisible();

    // Type a query
    await searchInput.fill('test');
    await expect(page.locator('text=No results found')).toBeVisible();

    // Close search (click the "X" icon)
    await page.click('button:has(svg) >> nth=1'); 
    await expect(searchInput).toBeHidden();
  });

  
});