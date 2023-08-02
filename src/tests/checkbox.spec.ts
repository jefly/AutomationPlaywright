import {Page, test, expect} from "@playwright/test";
import { CHECKBOXES, H3 } from "../utils/constants";
import { CheckboxPage } from "../pages/checkBox";

test('Verify the heading text on the Checkbox page', async ({ page }) => {
    
  const checkBox = new CheckboxPage(page);
  await checkBox.getStarted();

  const headingElement = await checkBox.getHeadingText();
  const headingText = await headingElement.textContent();

  expect(headingText).toContain(CHECKBOXES);  

});

test('Verify the availability of two checkboxes & first one is checked & second one is unchecked', async ({ page }) => {
  
  const checkBox = new CheckboxPage(page);
  await checkBox.getStarted();

  const check1 = await checkBox.getCheckBoxOneLocator();
  const check2 = await checkBox.getCheckBoxTwoLocator();

  expect(await check1.isChecked()).toBeFalsy();
  expect(await check2.isChecked()).toBeTruthy();

});