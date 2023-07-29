import {expect, type Locator, type Page} from '@playwright/test';

export class StatusCodePage {

    private readonly page: Page;
    private readonly statusCode: Locator;
    private readonly twoHundred: Locator;
    private readonly navigateTo200: Locator;

    constructor(page: Page) {
        this.page = page;
        this.statusCode = page.locator('a', { hasText: 'Status Codes' })
        this.twoHundred = page.locator('a', { hasText: '200' });
        // this.navigateTo200 = page.locator( 'p:has-text("This page returned a 200 status code.")' )
        this.navigateTo200 = page.locator('text=This page returned a 200 status code.');
    }

    async goto(){
        await this.page.goto('https://the-internet.herokuapp.com/');
    }

    async getStarted(){
        this.goto();
        this.gotoStatusPage();
    }

    private gotoStatusPage() {
        this.statusCode.isEditable();
        this.statusCode.click();
    }

    async clickTwoHundred() {
        await this.twoHundred.click();
    }

    async getTextLocator(): Promise<Locator> {
        return this.navigateTo200;
    }
}