import { test, expect } from '@playwright/test';
import { LoginPage } from './page/login';
import { DashboardPage } from './page/dashboard';
import { RecruitmentPage } from './page/recruitment';

test('login into OrangeHRM', async ({ page }) => {
  const login = new LoginPage(page);

  await login.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await expect(page.getByRole('heading', { name: 'Login' })).toBeVisible();
  await login.typeUsername('Admin');
  await login.typePassword('admin123');
  await login.clickLogin();
  await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
});

test('Recruitment - Create Candidate', async ({ page }) => {
  const login = new LoginPage(page);
  const dashboard = new DashboardPage(page);
  const recruitment = new RecruitmentPage(page);

  await login.login('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login', 'Admin', 'admin123');
  await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
  await dashboard.clickRecruitment();
  await recruitment.clickAddCandidate();
});


test('Recruitment - Edit candidate', async ({ page }) => {
  const login = new LoginPage(page);

  await login.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await expect(page.getByRole('heading', { name: 'Login' })).toBeVisible();
  await login.typeUsername('Admin');
  await login.typePassword('admin123');
  await login.clickLogin();
  await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
});


