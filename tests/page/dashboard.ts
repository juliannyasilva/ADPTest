import { type Locator, type Page } from '@playwright/test';

export class DashboardPage {
  readonly page: Page;
  readonly optionRecruitment: Locator;

  constructor(page: Page) {
    this.page = page;
    this.optionRecruitment = page.getByText('Recruitment');
  }

  async clickRecruitment() {
    await this.optionRecruitment.click();
  }

}