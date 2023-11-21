const { Builder, By, Key, until } = require('selenium-webdriver');
const assert = require('assert');

async function cp_login_02() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.get("https://example.com/login");
        await driver.findElement(By.id("username")).sendKeys("Pancholin");
        await driver.findElement(By.id("password")).sendKeys("taller");
        await driver.findElement(By.id("loginButton")).click();

    } catch (error) {
        console.error('Error durante la prueba:', error);
    } finally {
        await driver.quit();
    }
}

cp_login_02();
