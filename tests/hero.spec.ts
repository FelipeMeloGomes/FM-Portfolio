import { expect, test } from "@playwright/test";

test.describe("Hero", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/pt");
  });

  test("deve exibir foto de perfil", async ({ page }) => {
    const img = page.locator("img[alt*='Felipe']");
    await expect(img).toBeVisible();
  });

  test("deve exibir nome", async ({ page }) => {
    await expect(page.locator("h1")).toContainText("Felipe");
  });

  test("deve ter botao de download do curriculo", async ({ page }) => {
    const btn = page.locator("a[href*='FelipeMeloGomesDesenvolvedorFullStack.pdf']");
    await expect(btn).toBeVisible();
    await expect(btn).toHaveAttribute(
      "href",
      /FelipeMeloGomesDesenvolvedorFullStack\.pdf/
    );
  });

  test("deve exibir nome em ingles", async ({ page }) => {
    await page.goto("/en");
    await expect(page.locator("h1")).toContainText("Felipe");
  });
});
