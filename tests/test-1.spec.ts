import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://dar-ui-supplier.dev-test.pro/auth/login');
  await page.getByRole('tab', { name: 'Register' }).click();
  await page.getByPlaceholder('Full name').click();
  await page.getByPlaceholder('Full name').fill('олдолио');
  await page.getByPlaceholder('E-mail').click();
  await page.getByPlaceholder('E-mail').fill('лолрол');
  await page.getByPlaceholder('Address').click();
  await page.getByPlaceholder('Address').fill('рололо');
  await page.getByPlaceholder('Phone number').click();
  await page.getByPlaceholder('Phone number').fill('лоролрол');
  await page.getByPlaceholder('Password', { exact: true }).click();
  await page.getByPlaceholder('Password', { exact: true }).fill('олтлдол');
  await page.getByPlaceholder('Confirm password').click();
  await page.getByPlaceholder('Confirm password').fill('олло');
});