import { Page } from '@playwright/test';
import { BasePage } from "./basePage";
import { checkoutLocators } from "../locators/checkoutLocator";

export class CheckoutPage extends BasePage {
    constructor(page: Page) {
        super(page);
    }

    async enterFirstName(firstName: string): Promise<void> {
        await this.type(checkoutLocators.firstNameInput, firstName);
    }

    async enterLastName(lastName: string): Promise<void> {
        await this.type(checkoutLocators.lastNameInput, lastName);
    }

    async enterPostalCode(postalCode: string): Promise<void> {
        await this.type(checkoutLocators.postalCodeInput, postalCode);
    }

    async clickContinue(): Promise<void> {
        await this.click(checkoutLocators.continueButton);
    }

    async clickFinish(): Promise<void> {
        await this.click(checkoutLocators.finishButton);
    }

    async clickCancel(): Promise<void> {
        await this.click(checkoutLocators.cancelButton);
    }

    async getPriceTotal(): Promise<string> {
        return await this.getText(checkoutLocators.priceTotalLabel);
    }

    async getPaymentInfo(): Promise<string> {
        return await this.getText(checkoutLocators.paymentInfoLabel);
    }

    async getShippingInfo(): Promise<string> {
        return await this.getText(checkoutLocators.shippingInfoLabel);
    }
}