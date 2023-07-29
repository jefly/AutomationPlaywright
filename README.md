# AutomationPlaywright

# Setup Guide
## Prerequisites
### Step 1: Installing Node.js

Download the project and go to the root of the project and run `npm init -y` to install Node.js

### Step 2: Installing Playwright

To Install Playwright, run `npm init playwright@latest`. It asks these questions when initializing the project
- Do you want to use TypeScript or JavaScript? Hit <strong>Enter</strong> key on the keyboard.
-  Where to put your end-to-end tests? <strong>src/tests</strong>.
-  Add a GitHub Actions workflow? <strong>Y</strong>.
-  Install Playwright browsers (can be done manually via 'npx playwright install')? <strong>Y</strong>.

### Overriding the playwright.config file
lastly it says <strong>playwright.config.ts</strong> </br>
Type <strong>N</strong>, since I've alreaded added it to the project.

# Run the project

Run `npm test`
