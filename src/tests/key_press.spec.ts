import {Page, test, expect} from '@playwright/test';
import { KeyPressPage } from "../pages/keyPress";

test('Verify the \'A\' letter is pressed', async ({ page }) => {

    const keyPress = new KeyPressPage(page);
    keyPress.getStarted();

    const textField = await keyPress.getTextField();
    await textField.type('A');

    const keyNameElm = await keyPress.getKeyName();
    await keyNameElm.isVisible();
    const keyName = await keyNameElm.textContent();
    
    const textResult = await keyPress.getResultText();
    const result = await textResult.textContent();

    expect(keyName).toContain(result);
});