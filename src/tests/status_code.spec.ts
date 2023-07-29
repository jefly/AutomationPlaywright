import {Page, test, expect} from "@playwright/test";
import { StatusCodePage } from '../pages/statusCode';

test('Verify the status code 200 exist on the status code page', async ({ page }) => {
    
    const statusCodePage = new StatusCodePage(page);

    statusCodePage.getStarted();
    statusCodePage.clickTwoHundred();

    const paraElement = await statusCodePage.getTextLocator();
    const paraText = await paraElement.textContent();

    expect(paraText).toContain('200');
})