import { defineConfig } from '@playwright/test'; // // Import Playwright's defineConfig helper.
import { env } from './utils/env'; // import the env object from the utils/env module to access environment variables

export default defineConfig({ // Define and export the Playwright test configuration
  testDir: './tests', // Directory where the test files are located
  reporter: [
    ['list'], 
    ['html', { outputFolder: 'playwright-report' }]], // Configure reporters for test results
  use: { // Global settings for all tests
    baseURL: env.BASE_URL, // Base URL loaded from the environment configuration
    headless: false, // Run tests in headless mode
  }
});