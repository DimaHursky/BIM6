import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.getByRole('button', { name: 'Next step' }).click();
  await page.getByPlaceholder('E-mail').click();
  await page.getByPlaceholder('E-mail').press('ArrowLeft');
  await page.getByPlaceholder('E-mail').fill('ghjhfghfghfg@gmail.com');
  await page.getByRole('button', { name: 'Next step' }).click();
  await page.getByPlaceholder('Factory name').click();
  await page.getByPlaceholder('Factory name').fill('1');
  await page.getByRole('button', { name: 'Finish' }).click();
  await page.getByText('Country is required').click();
  await page.getByText('City is required').click();
  await page.getByText('Latitude is required').click();
  await page.getByText('Longitude is required').click();
  await page.getByText('Annual Energy Consumption is').first().click();
  await page.getByText('Electricity Location is').click();
  await page.getByText('Annual Energy Consumption is').nth(1).click();
  await page.getByText('Gas Type is required').click();
  await page.getByText('Average output tonnage of all products is required').click();
  await page.getByText('Renewable Energy is required').click();
  await page.getByPlaceholder('Factory name').click();
  await page.getByPlaceholder('Factory name').fill('');
  await page.locator('#react-select-2-placeholder').click();
  await page.locator('#react-select-2-input').fill('1');
  await page.getByRole('button', { name: 'Finish' }).click();
});