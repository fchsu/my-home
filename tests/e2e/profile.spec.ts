import { test, expect } from '@playwright/test';

test.describe('US1: Profile and Links', () => {
  test('should display profile summary and correct functional links', async ({ page }) => {
    await page.goto('/');

    // Assert name and role
    await expect(page.locator('h1')).toContainText('Gavin');
    await expect(page.getByText(/Frontend Engineer/)).toBeVisible();
    
    // Assert Links are visible
    const githubLink = page.getByRole('link', { name: 'GitHub', exact: true });
    await expect(githubLink).toBeVisible();
    await expect(githubLink).toHaveAttribute('href', /github\.com/);
    
    const linkedinLink = page.getByRole('link', { name: /LinkedIn/i });
    await expect(linkedinLink).toBeVisible();
    await expect(linkedinLink).toHaveAttribute('href', /linkedin\.com/);
    
    const resumeLink = page.getByRole('link', { name: /履歷/i });
    await expect(resumeLink).toBeVisible();
  });
});
