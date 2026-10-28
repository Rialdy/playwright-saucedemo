# Start Project Playwright
- Initialize project
npm init -y

- Install Playwright
npm init playwright@latest
-- Answer
    TypeScript
    tests
    No
    Yes

- Create Folder
    /locators
    /pages
    /test-data
    /utils
    /screenshots

- Create File in root folder
    .env

- Install dot env    
    npm install dotenv

- Add .env into .gitignore

- Create env.ts
    Create env.ts inside utils folder
        /folder/env.ts

- Check playwright.config.ts
    Adjust based on what needed

- Create locators
    Create some locators and store to /locators/<feature>.locators.ts

- Create BasePage.ts
    Create basePage.ts for the POM general feature

- Create LoginPage.ts
    Create loginPage.ts for the POM of Login Page

- Create login.spec.ts
    Create login.spec.ts for run the Login Test Case

- run the script
    npx playwright test tests/login.spec.ts