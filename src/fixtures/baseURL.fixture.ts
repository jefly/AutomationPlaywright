import { PlaywrightTestConfig, Fixtures, Page } from '@playwright/test';
import defineConfig from '../../playwright.config';

const baseURLFixture: Fixtures<any> = async ({ page }) => {
    const baseURL = defineConfig.use?.baseURL;
    await page.goto(baseURL);
}

export default baseURLFixture;