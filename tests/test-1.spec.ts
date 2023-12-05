import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.locator('#react-select-2-placeholder').click();
  await page.locator('#react-select-2-input').press('Escape');
  await page.locator('#react-select-3-placeholder').click();
  await page.locator('#react-select-3-input').press('Escape');
  await 
  await page.locator('#react-select-4-input').press('Escape');
});