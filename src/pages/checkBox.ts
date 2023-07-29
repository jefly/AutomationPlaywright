import {expect, type Locator, type Page} from '@playwright/test';

export class CheckboxPage {

    private readonly page: Page;
    private readonly checkboxLink: Locator;
    private readonly checkboxText: Locator;
    private readonly checkboxOne: Locator;
    private readonly checkboxTwo: Locator;

    constructor(page: Page) {
        this.page = page;
        this.checkboxLink = page.locator('a', { hasText: 'Checkboxes' });
        this.checkboxText = page.locator('h3', { hasText: 'Checkboxes' });
        this.checkboxOne = page.locator('input[type="checkbox"]').first();
        this.checkboxTwo = page.locator('input[type="checkbox"]').nth(1);;
    }

    async goto(){
        await this.page.goto('https://the-internet.herokuapp.com/');
    }

    async getStarted(){
        this.goto();
        await this.checkboxLink.click();
    }

    async getHeadingText(): Promise<Locator> {
        return this.checkboxText;
    }

    async getCheckBoxOneLocator(): Promise<Locator> {
        return await this.checkboxOne;
    }

    async getCheckBoxTwoLocator(): Promise<Locator> {
        return await this.checkboxTwo;
    }
}