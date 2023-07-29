# AutomationPlaywright

# Setup Guide
## Prerequisites
### Step 1: Installing Node.js

Download the project and go to the root of the project and run `npm init -y` to install Node.js

### Step 2: Installing Playwright

To Install Playwright, run `npm init playwright@latest`. It asks these questions when initializing the project
- Do you want to use TypeScript or JavaScript? Hit <strong>Enter</strong> key on the keyboard.
-  Where to put your end-to-end tests? Type <strong>src/tests</strong>
-  Add a GitHub Actions workflow? Type <strong>Y</strong>
-  Install Playwright browsers (can be done manually via 'npx playwright install')? Type <strong>Y</strong>.

#### Overriding the playwright.config file
Lastly it says <strong>playwright.config.ts</strong> already exists and ask to override it. </br>
Type <strong>N</strong>, since I've alreaded added it to the project.

### Step 3: Run the project

Run `npm test`
