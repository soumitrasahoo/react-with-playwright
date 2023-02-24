const { test, expect } = require('@playwright/test');

test.describe("Calculator", () => {
    test.beforeEach(async ({ page }) => {
        page.goto('http://localhost:3000/');
    });

    test('Initially First Input field should be empty', async ({ page }) => {
        const input = page.getByTestId('input1');
        await expect(input).toHaveValue("");
    });

    test('Initially Second Input field should be empty', async ({ page }) => {
        const input = page.getByTestId('input2');
        await expect(input).toHaveValue("");
    });

    test('Initially Total Input field should be empty', async ({ page }) => {
        const input = page.getByTestId('total');
        await expect(input).toHaveValue("");
    });

    test('add button should enable if both values are there', async ({ page }) => {
        const input1 = page.getByTestId('input1');
        const input2 = page.getByTestId('input2');
        const btn = page.getByRole('button', { name: '+' });
        await input1.fill("10");
        await input2.fill("2");
        await expect(btn).toBeEnabled();
    });

    test('Reset button should enable if any one of the value is there', async ({ page }) => {
        const input1 = page.getByTestId('input1');
        const btn = page.getByRole('button', { name: 'Reset' });
        await input1.fill("10");
        await expect(btn).toBeEnabled();
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
