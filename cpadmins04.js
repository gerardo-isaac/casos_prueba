const { Builder, By, Key, until } = require('selenium-webdriver');
const assert = require('assert');

async function cp_admin_s_04() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.get("https://yufa.hackerutd.online/");
        await driver.manage().window().setRect({ width: 1056, height: 800 });
        await driver.findElement(By.css("a:nth-child(1) > span")).click();
        await driver.findElement(By.id("usuario")).sendKeys("admin");
        await driver.findElement(By.id("password")).sendKeys("admin");
        await driver.findElement(By.id("enviar")).click();
        await driver.findElement(By.css(".swal2-confirm")).click();
        await driver.findElement(By.linkText("Servicios Ofertados")).click();
        await driver.findElement(By.css(".form-control-sm")).click();
        await driver.findElement(By.css(".form-control-sm")).sendKeys("aceite");
        await driver.findElement(By.css(".form-control-sm")).sendKeys(Key.ENTER);

    } catch (error) {
        console.error('Error durante la prueba:', error);
    } finally {
        await driver.quit();
    }
}

cp_admin_s_04();
