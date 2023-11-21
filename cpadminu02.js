const { Builder, By, Key, until } = require('selenium-webdriver');
const assert = require('assert');

async function cp_admin_u_02() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.get("https://yufa.hackerutd.online/html/login.html");
        await driver.manage().window().setRect({ width: 1054, height: 800 });
        await driver.findElement(By.id("usuario")).sendKeys("admin");
        await driver.findElement(By.id("password")).sendKeys("admin");
        await driver.findElement(By.id("password")).sendKeys(Key.ENTER);
        await driver.findElement(By.id("enviar")).click();
        await driver.findElement(By.css(".swal2-confirm")).click();
        await driver.findElement(By.linkText("Ver Usuarios")).click();
        await driver.findElement(By.css(".odd .btn-danger > .material-icons")).click();
        await driver.findElement(By.css(".swal2-confirm")).click();
        await driver.findElement(By.css(".swal2-confirm")).click();

    } catch (error) {
        console.error('Error durante la prueba:', error);
    } finally {
        await driver.quit();
    }
}

cp_admin_u_02();
