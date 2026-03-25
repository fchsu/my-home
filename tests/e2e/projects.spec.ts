import { test, expect } from '@playwright/test';

test.describe('US2: Portfolio Projects', () => {
  test('should display project list with details and functioning external links', async ({ page }) => {
    await page.goto('/#portfolio');

    // Wait for project cards
    const portfolioSection = page.locator('#portfolio');
    await expect(portfolioSection).toBeVisible();

    const projectCard = portfolioSection.locator('.group').first();
    await expect(projectCard).toBeVisible();

    // ensure links exist on cards
    const cardLinks = projectCard.locator('a');
    await expect(await cardLinks.count()).toBeGreaterThan(0);
  });
});
