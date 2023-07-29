import {Page, test, expect} from "@playwright/test";
import { FormAuthPage } from "../pages/formAuthentication";

test('Form Authentication', async ({ page }) => {
    
    const formAuth = new FormAuthPage(page);
    formAuth.getStarted();
    formAuth.fillForm();

    const header = await formAuth.getHeaderText();
    const headerText = await header.textContent();

    expect(headerText).toContain('Secure Area');
});