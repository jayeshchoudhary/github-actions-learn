import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
    await page.goto("https://playwright.dev/");

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Playwright/);
});

test("get started link", async ({ page }) => {
    await page.goto("https://playwright.dev/");

    // Click the get started link.
    await page.getByRole("link", { name: "Get started" }).click();

    // Expects page to have a heading with the name of Installation.
    await expect(
        page.getByRole("heading", { name: "Installation" })
    ).toBeVisible();
});

test("login to admin portal dev", async ({ page }) => {
    await page.goto("https://admin-portal.startree-dev.cloud/");
    await page.waitForURL("https://startree-*.auth0.com/*");
    await page.getByLabel("Email").click();
    await page.getByLabel("Email").fill(process.env.EMAIL || "test");
    await page.getByLabel("Password").click();
    await page.getByLabel("Password").fill(process.env.PASSWORD || "test");
    await page.getByRole("button", { name: "LOG IN", exact: true }).click();

    await expect(page.getByRole("heading", { name: "Overview" })).toBeVisible();
});
