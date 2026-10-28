import { test, expect } from '@playwright/test';    
import { LoginPage } from '../pages/loginPage'; // Import the LoginPage class from the pages/loginPage module
import { env } from '../utils/env'; // Import the env module from utils/env for environment variables

test.describe('Login Tests', () => { 
    
    test('Successful login with valid credentials', async ({ page }) => { // Test case for successful login
        const loginPage = new LoginPage(page); // Create an instance of LoginPage with the current page

        await page.goto('/'); // Navigate to the login page

        await loginPage.login(
            env.LOGIN_USERNAME, 
            env.LOGIN_PASSWORD
        );
        await expect(page).toHaveURL('/inventory.html'); // Verify that the URL is now the inventory page after successful login
    }); 

    test('Unsuccessful login with invalid credentials', async ({ page }) => { // Test case for unsuccessful login
        const loginPage = new LoginPage(page); // Create an instance of LoginPage with the current page

        await page.goto('/'); // Navigate to the login page

        await loginPage.login(
            'invalid_user', 
            'invalid_password'
        );
        const errorMessage = await loginPage.getErrorMessage(); // Retrieve the error message displayed on the login page
        expect(errorMessage).toBe('Epic sadface: Username and password do not match any user in this service'); // Verify that the error message is as expected
    });
});