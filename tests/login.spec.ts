import { test, expect } from '@playwright/test';
import { LoginPage } from './page/login';

test('login into OrangeHRM', async ({ page }) => {
  const login = new LoginPage(page);

  await login.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await expect(page.getByRole('heading', { name: 'Login' })).toBeVisible();
  await login.typeUsername('Admin');
  await login.typePassword('admin123');
  await login.clickLogin();
  await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
});