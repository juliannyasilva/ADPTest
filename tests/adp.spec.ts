import { test, expect } from '@playwright/test';
import { LoginPage } from './page/login';
import { DashboardPage } from './page/dashboard';
import { RecruitmentPage } from './page/recruitment';

const userData = {
    url: 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
    username: 'Admin',
    password: 'admin123'
};

const candidateData = {
    firstName: 'Julianny',
    lastName: 'Test',
    email: 'juliannytest@example.com'
};

test('login into OrangeHRM', async ({ page }) => {
  const login = new LoginPage(page);

  await login.goto(userData.url);
  await expect(page.getByRole('heading', { name: 'Login' })).toBeVisible();
  await login.typeUsername(userData.username);
  await login.typePassword(userData.password);
  await login.clickLogin();
  await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
});

test('Recruitment - Create Candidate', async ({ page }) => {
  const login = new LoginPage(page);
  const dashboard = new DashboardPage(page);
  const recruitment = new RecruitmentPage(page);

  await login.login(userData.url, userData.username, userData.password);
  await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
  await dashboard.clickRecruitment();
  await recruitment.clickAddCandidate();
  await recruitment.typeFirstName(candidateData.firstName);
  await recruitment.typeLastName(candidateData.lastName);
  await recruitment.typeEmail(candidateData.email);
  await recruitment.clickSave();
  await expect(page.getByRole('heading', { name: 'Candidate Profile' })).toBeVisible();
});

test('Recruitment - Edit Candidate', async ({ page }) => {
  const login = new LoginPage(page);
  const dashboard = new DashboardPage(page);
  const recruitment = new RecruitmentPage(page);

  await login.login(userData.url, userData.username, userData.password);
  await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
  await dashboard.clickRecruitment();
  await recruitment.clickAddCandidate();
  await recruitment.selectCandidate(candidateData.firstName, candidateData.lastName);
  await recruitment.clickEditCandidate();
  await recruitment.typeEmail('juju@example.com');
  await recruitment.clickSave();
  await expect(page.getByText('julianny@example.com')).toBeVisible();
});
