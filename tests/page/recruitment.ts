import { type Locator, type Page } from '@playwright/test';

export class RecruitmentPage {
  readonly page: Page;
  readonly optionRecruitment: Locator;

  constructor(page: Page) {
    this.page = page;
    this.optionAddCantidate = page.getByRole('button', { name: ' Add ' });
  }

  async clickAddCandidate() {
    await this.optionAddCantidate.click();
  }

}