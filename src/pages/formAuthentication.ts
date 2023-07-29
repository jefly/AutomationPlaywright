import {expect, type Locator, type Page} from '@playwright/test';

export class FormAuthPage {

    private readonly page: Page;
    private readonly formAuthText: Locator;
    private readonly userName: Locator;
    private readonly password: Locator;
    private readonly login: Locator;
    private readonly logOutBtn: Locator;
    private readonly loginText: Locator;

    constructor(page: Page) {
        this.page = page;
        this.formAuthText = page.locator('a', { hasText: 'Form Authentication' });
        this.userName = page.locator('[id="username"]');
        this.password = page.locator('[id = "password"]');
        this.login = page.locator('[class="radius"]');
        this.logOutBtn = page.locator('link', { hasText: 'Logout' });
        this.loginText = page.locator('h2', { hasText: 'Secure Area' });
    }

    async goto(){
        await this.page.goto('https://the-internet.herokuapp.com/');
    }

    async getStarted(){
        this.goto();
        this.gotoFormPage();
    }

    async gotoFormPage() {
        this.formAuthText.isEditable()
        this.formAuthText.click()
    }

    async fillForm() {
        await this.userName.type('tomsmith')
        await this.password.isEditable()
        await this.password.click()
        await this.password.type('SuperSecretPassword!')
        await this.login.click()
    }

    async clickLogOut() {
        await this.logOutBtn.click();
    }

    async getHeaderText(): Promise<Locator> {
        return this.loginText;
    }
}