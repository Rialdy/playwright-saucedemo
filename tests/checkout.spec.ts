import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage'; // Import the loginPage class from the pages/loginPage module
import { InventoryPage } from '../pages/inventoryPage'; // Import the inventoryPage class from the pages/inventoryPage module
import { CartPage } from '../pages/cartPage';
import { CheckoutPage } from '../pages/checkoutPage';
import { env } from '../utils/env'; // Import the env module from utils/env for environment variables

test.describe('Checkout Tests', () => {

    //Login before each test
    test.beforeEach(async ({ page }) => {
        const loginPage = new LoginPage(page);

        await page.goto('/');
        await loginPage.login(
            env.LOGIN_USERNAME, 
            env.LOGIN_PASSWORD
        );
        
        await expect(page).toHaveURL('inventory.html'); // Verify that the URL is now the inventory page after successful login
    });

        test('Successfull checkout process', async ({ page }) => {

            // Step 1 - Add items to the cart
            const inventoryPage = new InventoryPage(page);

            await inventoryPage.addBackpackToCart();
            await inventoryPage.addBikeLightToCart();
            await inventoryPage.addShirtToCart();

            // Step 2 - Go to the cart page
            await inventoryPage.goToShoppingCart();

            // Step 3 - Verify that the items are in the cart
            const cartPage = new CartPage(page);

            await expect.poll(() => cartPage.isBackpackInCart()).toBe(true);
            await expect.poll(() => cartPage.isBikeLightInCart()).toBe(true);
            await expect.poll(() => cartPage.isShirtInCart()).toBe(true);

            // Step 4 - Proceed to checkout
            await cartPage.proceedToCheckout();

            // Step 5 - Fill in the checkout information
            const checkoutPage = new CheckoutPage(page);

            await checkoutPage.enterFirstName('John');
            await checkoutPage.enterLastName('Doe');
            await checkoutPage.enterPostalCode('12345');

            await checkoutPage.clickContinue();

            // Step 6 - Verify the checkout overview
            await expect(page).toHaveURL('checkout-step-two.html');

            await expect.poll(() => checkoutPage.getPriceTotal()).not.toBe('');
            await expect.poll(() => checkoutPage.getPaymentInfo()).not.toBe('');
            await expect.poll(() => checkoutPage.getShippingInfo()).not.toBe('');
            
            // Step 7 - Finish the checkout process
            await checkoutPage.clickFinish();

            // Step 8 - Verify the checkout complete page
            await expect(page).toHaveURL('checkout-complete.html');

            await expect(
                page.getByText('Thank you for your order!')).toBeVisible();
        })
});
