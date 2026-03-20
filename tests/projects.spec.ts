import { expect, test } from "@playwright/test";

test.describe("Projetos", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/pt");
    await page.waitForLoadState("networkidle");
  });

  test("deve exibir secao de projetos", async ({ page }) => {
    const section = page.locator("section#projects");
    await expect(section.first()).toBeVisible();
  });

  test("deve exibir ao menos um card de projeto", async ({ page }) => {
    const cards = page.locator("[data-testid='project-card']");
    await expect(cards.first()).toBeVisible();
  });

  test("deve exibir projetos em ingles", async ({ page }) => {
    await page.goto("/en");
    await page.waitForLoadState("networkidle");
    const section = page.locator("section#projects");
    await expect(section.first()).toBeVisible();
  });
});
