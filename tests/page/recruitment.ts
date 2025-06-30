import { type Locator, type Page } from '@playwright/test';

export class RecruitmentPage {
  readonly page: Page;
  readonly optionAddCantidate: Locator;
  readonly fieldFirstName: Locator;
  readonly fieldLastName: Locator;
  readonly fieldEmail: Locator;
  readonly btnSave: Locator;
  readonly toggleEditCandidate: Locator;

  constructor(page: Page) {
    this.page = page;
    this.optionAddCantidate = page.getByRole('button', { name: ' Add ' });
    this.fieldFirstName = page.getByPlaceholder('First Name');
    this.fieldLastName = page.getByPlaceholder('Last Name');
    this.fieldEmail = page.getByPlaceholder('Type here').first();
    this.btnSave = page.getByRole('button', { name: ' Save ' });
    this.toggleEditCandidate = page.locator('label').filter({ hasText: 'Edit' }).locator('span');
  }

  async clickAddCandidate() {
    await this.optionAddCantidate.click();
  }

  async typeFirstName(firstName) {
    await this.fieldFirstName.fill(firstName);
  }

  async typeLastName(lastName) {
    await this.fieldLastName.fill(lastName);
  }

  async typeEmail(email) {
    await this.fieldEmail.fill(email);
  }

  async clickSave() {
    await this.btnSave.click();
  }

  async selectCandidate(firstName, lastName) {
    await this.page.getByRole('row', { name: firstName+' '+lastName }).getByRole('button').first().click();
  }

  async clickEditCandidate() {
    await this.toggleEditCandidate.click();
  }

}