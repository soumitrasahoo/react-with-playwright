const { test, expect } = require('@playwright/test');

test.describe("Calculator", () => {
    test.beforeEach(async ({ page }) => {
        page.goto('http://localhost:3000/');
    });

    test('Should add both number after click on the plus button', async ({ page }) => {
        const input1 = page.getByTestId('input1');
        const input2 = page.getByTestId('input2');
        const total = page.getByTestId('total');
        const btn = page.getByRole('button', { name: '+' });
        await input1.fill("10");
        await input2.fill("2");
        await btn.click();
        await expect(total).toHaveValue("12");
    });

    test('Should substruct both number after click on the minus button', async ({ page }) => {
        const input1 = page.getByTestId('input1');
        const input2 = page.getByTestId('input2');
        const total = page.getByTestId('total');
        const btn = page.getByRole('button', { name: '-' });
        await input1.fill("10");
        await input2.fill("2");
        await btn.click();
        await expect(total).toHaveValue("8");
    });

    test('Should multiply both number after click on the multiplication button', async ({ page }) => {
        const input1 = page.getByTestId('input1');
        const input2 = page.getByTestId('input2');
        const total = page.getByTestId('total');
        const btn = page.getByRole('button', { name: 'X' });
        await input1.fill("10");
        await input2.fill("2");
        await btn.click();
        await expect(total).toHaveValue("20");
    });

    test('Should devide both number after click on the division button', async ({ page }) => {
        const input1 = page.getByTestId('input1');
        const input2 = page.getByTestId('input2');
        const total = page.getByTestId('total');
        const btn = page.getByRole('button', { name: '/' });
        await input1.fill("10");
        await input2.fill("2");
        await btn.click();
        await expect(total).toHaveValue("5");
    });
});
