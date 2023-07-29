import {Page, test, expect} from "@playwright/test";
import { CHECKBOXES, H3 } from "../utils/constants";
import { CheckboxPage } from "../pages/checkBox";

test('Verify the heading text on the Checkbox page', async ({ page }) => {
    
  const checkBox = new CheckboxPage(page);
  await checkBox.getStarted();

  // const headingElement = await page.getByText(H3);
  const headingElement = await checkBox.getHeadingText();
  const headingText = await headingElement.textContent();

  expect(headingText).toContain(CHECKBOXES);

    // await page.goto('https://the-internet.herokuapp.com/');

    // await page.click('text=Checkboxes');

    
    
  

});

test('Verify the availability of two checkboxes & they are unchecked', async ({ page }) => {
  
  const checkBox = new CheckboxPage(page);
  await checkBox.getStarted();

  // const check1 = await page.locator('input[type="checkbox"]:nth-child(1)');
  // const check2 = await page.getByRole('checkbox').nth(1);

  const check1 = await checkBox.getCheckBoxOneLocator();
  const check2 = await checkBox.getCheckBoxTwoLocator();

  // expect(await check1.isChecked()).toBeFalsy();
  // expect(await check2.isChecked()).toBeTruthy();

  expect(await check1.isChecked()).toBeFalsy();
  expect(await check2.isChecked()).toBeTruthy();

});