# Training-Playwright

End-to-end automation testing project using **Playwright** with **TypeScript**, following the **Page Object Model (POM)** pattern.

## Project Structure

```
Training-Playwright/
├── tests/               # Test spec files
├── pages/               # Page Object Model classes
├── locators/            # Locator definitions
├── test-data/           # Test data files
├── utils/               # Utility modules (env, helpers)
├── screenshots/         # Captured screenshots
├── playwright-report/   # HTML test reports
├── .env.example         # Environment variable template
└── playwright.config.ts # Playwright configuration
```

## Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher)
- npm

## Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/<your-username>/Training-Playwright.git
   cd Training-Playwright
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Install Playwright browsers**

   ```bash
   npx playwright install
   ```

4. **Configure environment variables**

   Copy the example env file and fill in the values:

   ```bash
   cp .env.example .env
   ```

   Update `.env` with your credentials:

   ```env
   BASE_URL=https://www.saucedemo.com
   LOGIN_USERNAME=your_username
   LOGIN_PASSWORD=your_password
   ```

## Running Tests

```bash
# Run all tests
npx playwright test

# Run a specific test file
npx playwright test tests/login.spec.ts

# Run tests with UI mode
npx playwright test --ui

# Run tests in headed mode (visible browser)
npx playwright test --headed
```

## View Test Report

After running tests, open the HTML report:

```bash
npx playwright show-report
```

## Tech Stack

- [Playwright](https://playwright.dev/) - Browser automation framework
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- [dotenv](https://github.com/motdotla/dotenv) - Environment variable management
- Page Object Model (POM) design pattern
