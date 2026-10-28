import { Page} from '@playwright/test'; // Import the Playwright Page type
import { BasePage } from './basePage'; // Import the BasePage class from the basePages module
import { loginLocators } from '../locators/loginLocator'; // Import the loginLocators object from the loginLocators module

export class LoginPage extends BasePage { 
    constructor(page: Page) { // Constructor to initialize the LoginPage with a Playwright Page instance
        super(page); // Call the constructor of the BasePage class to initialize the 'page' property
    }

    async login(username: string, password: string): Promise<void> { // Method to perform the login action
        await this.type(loginLocators.usernameInput, username);  
        await this.type(loginLocators.passwordInput, password);
        await this.click(loginLocators.loginButton);  
    }

    async getErrorMessage(): Promise<string> { // Method to retrieve the error message displayed on the login page
        return await this.getText(loginLocators.errorMessage); // Use the getText method from BasePage to get the error message text
    }
}