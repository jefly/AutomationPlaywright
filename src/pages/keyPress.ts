import {expect, type Locator, type Page} from '@playwright/test';

export class KeyPressPage {

    private readonly page: Page;
    private readonly KeyPresses: Locator;
    private readonly textField: Locator;
    private readonly textResult: Locator;
    private readonly keyName: Locator;

    constructor(page: Page) {
        this.page = page;
        this.KeyPresses = page.getByRole('link', { name: 'Key Presses' });
        this.textField = page.locator('#target');
        this.textResult = page.locator('#result');
        this.keyName = page.locator('[class="example"]>p:nth-child(4)');
    }

    async goto(){
        await this.page.goto('https://the-internet.herokuapp.com/');
    }

    async getStarted(){
        this.goto();
        this.gotoKeyPressPage();
    }

    private gotoKeyPressPage() {
        this.KeyPresses.isEditable();
        this.KeyPresses.click();
    }

    async getTextField(): Promise<Locator> {
        return this.textField;
    }

    async getKeyName(): Promise<Locator> {
        return this.keyName;
    }

    async getText(): Promise<Locator> {
        return this.textResult;
    }

    async getResultText(): Promise<Locator> {
        return this.textResult;
    }
}