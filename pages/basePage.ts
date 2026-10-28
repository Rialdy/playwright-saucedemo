import { Page } from '@playwright/test'; // // Import the Playwright Page type

export class BasePage { // Base class containing reusable methods shared by all page objects
    protected page: Page; // Declare a protected property 'page' of type Page to be used in derived classes
    
    constructor(page: Page) { // Constructor to initialize the basePage with a Playwright Page instance
        this.page = page; // Assign the provided Page instance to the 'page' property
    }

    async navigate(url: string): Promise<void> { // Method to navigate to a specified URL
        await this.page.goto(url); // Use the Playwright Page instance to navigate to the specified URL
    }

    async click(locator: string): Promise<void> { // Method to click on an element specified by the locator
        await this.page.click(locator); // Use the Playwright Page instance to perform a click action on the element
    }

    async type(locator: string, text: string): Promise<void> { // Method to type text into an input field specified by the locator
        await this.page.fill(locator, text); // Use the Playwright Page instance to fill the input field with the specified text
    }

    async getText(locator: string): Promise<string> { // Method to retrieve the text content of an element specified by the locator
        return await this.page.textContent(locator) || ''; // textContent() can return null, so return an empty string instead.
    }

    async isElementVisible(locator: string): Promise<boolean> { // Method to check if an element specified by the locator is visible on the page
        return await this.page.locator(locator).isVisible(); // Use the Playwright Page instance to check the visibility of the element
    }
}
