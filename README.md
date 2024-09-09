# AutomationPlaywright (Playwright, TypeScript & Page Object Model)

# Setup Guide
## Prerequisites
### Step 1: Installing Node.js

Download the project and go to the root of the project and run `npm init -y` to install Node.js

### Step 2: Installing Playwright (Run `npm i` if you want to skip this step)


To Install Playwright, run `npm init playwright@latest`. It asks these questions when initializing the project
- Do you want to use TypeScript or JavaScript? Hit <strong>Enter</strong> key on the keyboard which will select TypeScript
-  Where to put your end-to-end tests? Type <strong>src/tests</strong>
-  Add a GitHub Actions workflow? Type <strong>Y</strong>
-  Install Playwright browsers (can be done manually via 'npx playwright install')? Type <strong>Y</strong>

#### Overriding the playwright.config file

Lastly it says <strong>playwright.config.ts</strong> already exists and ask to override it. </br>
Type <strong>N</strong>, since I've alreaded added it to the project.

### Step 3: Install the dotenv package

Run `npm intall dotenv` to install the `dotenv` package. </br>

### Step 4: Run the project

Run `npm run test:chrome` if you neeed to run tests only on Chrome browser in the command line in the root folder. </br>
Run `npm run test:all` if you neeed to run tests on all Chrome, Firfox & Safari browsers

### Step 5: See the Test Results

Run `npx playwright show-report` and it will open up a browser with the executed tests.
