import { expect, test } from "@playwright/test";

test.describe("Navbar", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/pt");
  });

  test("deve estar visivel", async ({ page }) => {
    await expect(page.locator("nav")).toBeVisible();
  });

  test("deve ter toggle de tema", async ({ page }) => {
    const toggle = page.locator(
      "button[aria-label*='tema'], button[aria-label*='theme']"
    );
    await expect(toggle.first()).toBeVisible();
  });

  test("deve alternar para ingles", async ({ page }) => {
    await page
      .locator("button:has-text('EN'), a:has-text('EN')")
      .first()
      .click();
    await expect(page).toHaveURL(/\/en/);
  });

  test("deve alternar para portugues", async ({ page }) => {
    await page.goto("/en");
    await page
      .locator("button:has-text('PT'), a:has-text('PT')")
      .first()
      .click();
    await expect(page).toHaveURL(/\/pt/);
  });
});
