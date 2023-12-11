import { test, expect } from '@playwright/test';
import { Login } from './pageObjects/login-page';

const email = 'borisbritva6996@gmail.com';
const password = '12345!Hur';

test('login with valid credentials', async ({ page }) => {
  const loginPage = new Login(page);
  await loginPage.login(email, password);
  await expect(page).toHaveURL('https://dar-ui-supplier.dev-test.pro/')
});

test('login without Email address', async ({ page }) => {
  const loginPage = new Login(page);
  await loginPage.login('', password);
  expect (loginPage.emailIsInvalidMessage).toBeDefined();
});

test('Login with an incorrect Email address', async ({ page }) => {
  const loginPage = new Login(page);
  await loginPage.login('borisbritva@gmail.com', password);
  await page.waitForTimeout(500);
  expect (page.getByText('Invalid login or password.')).toBeDefined();
});

test('Login with an incorrect Password address', async ({ page }) => {
  const loginPage = new Login(page);
  await loginPage.login(email, '12345ur');
  await page.waitForTimeout(500);
  expect (page.getByText('Invalid login or password.')).toBeDefined();
});

test('login without Password', async ({ page }) => {
  const loginPage = new Login(page);
  await loginPage.login(email, '');
  expect (loginPage.passwordIsRequiredMessage).toBeTruthy();
});

test('login without Email and Password', async ({ page }) => {
  const loginPage = new Login(page);
  await loginPage.login('', '');
  expect (loginPage.emailIsInvalidMessage).toBeTruthy();
  expect (loginPage.passwordIsRequiredMessage).toBeTruthy();
});
