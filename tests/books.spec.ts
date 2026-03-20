import { expect, test } from "@playwright/test";

test.describe("Books", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/pt");
    await page.waitForLoadState("networkidle");
  });

  test("deve exibir secao de livros", async ({ page }) => {
    const section = page.locator("section#books");
    await expect(section.first()).toBeVisible();
  });

  test("deve exibir filtros de status", async ({ page }) => {
    const filters = page.locator("[data-testid='book-filter']");
    await expect(filters.first()).toBeVisible();
  });

  test("deve filtrar livros por status", async ({ page }) => {
    const filter = page.locator("[data-testid='book-filter']").first();
    await filter.click();
    const cards = page.locator("[data-testid='book-card']");
    await expect(cards.first()).toBeVisible();
  });

  test("deve exibir livros em ingles", async ({ page }) => {
    await page.goto("/en");
    await page.waitForLoadState("networkidle");
    const section = page.locator("section#books");
    await expect(section.first()).toBeVisible();
  });
});
