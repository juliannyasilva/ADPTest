import { type Locator, type Page } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly fieldUsername: Locator;
  readonly fieldPassword: Locator;
  readonly btnLogin: Locator;

  constructor(page: Page) {
    this.page = page;
    this.fieldUsername = page.getByPlaceholder('Username');
    this.fieldPassword = page.getByPlaceholder('Password');
    this.btnLogin = page.getByRole('button', { name: 'Login' });
  }
  
  async goto(url) {
    await this.page.goto(url);
  }

  async typePassword(password) {
    await this.fieldPassword.fill(password);
  }

  async typeUsername(username) {
    await this.fieldUsername.fill(username);
  }

  async clickLogin() {
    await this.btnLogin.click();
  }

  async login(url, username, password) {
    await this.goto(url)
    await this.typeUsername(username)
    await this.typePassword(password)
    await this.clickLogin()
  }

}