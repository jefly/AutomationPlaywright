import {Page, test, expect} from "@playwright/test";

// declare const page: Page;
const linkText = 'Checkboxes';

test('Verify the heading text on the Add/Remove Elements page', async ({ page }) => {
    
  await page.goto('https://the-internet.herokuapp.com/');

  await page.click('text=Add/Remove Elements');

  const heading = await page.getByRole('heading', {name: 'Add/Remove Elements'})
  await expect(heading).toContainText('Add/Remove Elements');

});

test('Verify the visibility of Delete button', async ({ page }) => {

  const addRemoveElementPage = page.locator('a', { hasText: 'Add/Remove Elements' });
  const addElemntBtn = page.locator('button', { hasText: 'Add Element' });
  const deleteBtn = page.locator('button', { hasText: 'Delete' });

  await page.goto('https://the-internet.herokuapp.com');
  await addRemoveElementPage.isEditable()
  await addRemoveElementPage.click();
  await expect(addElemntBtn).toBeVisible()
  await addElemntBtn.click();
  await expect(deleteBtn).toBeVisible()
  await deleteBtn.click()
  await expect(deleteBtn).not.toBeVisible()
    
  // await page.goto('https://the-internet.herokuapp.com/');

  // await page.click('text=Add/Remove');

  // await page.getByRole('button', { name: 'Add Element'}).click();

  // expect(await page.getByText('Delete').isVisible).toBeTruthy();

  // await page.getByRole('button', { name: 'Delete'}).click();
  
  // expect(await page.getByText('Delete').isVisible).toBeFalsy();
  
});