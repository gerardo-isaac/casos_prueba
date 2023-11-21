const { Builder, By, Key, until } = require('selenium-webdriver');
const assert = require('assert');

async function cp_admin_s_01() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.get("https://yufa.hackerutd.online/");
        await driver.manage().window().setRect({ width: 1054, height: 799 });
        await driver.findElement(By.css("a:nth-child(1) > span")).click();
        await driver.findElement(By.id("usuario")).sendKeys("admin");
        await driver.findElement(By.id("password")).sendKeys("admin");
        await driver.findElement(By.id("enviar")).click();
        await driver.findElement(By.css(".swal2-confirm")).click();
        await driver.findElement(By.linkText("Servicios Ofertados")).click();
        await driver.findElement(By.id("btnNuevo")).click();
        await driver.findElement(By.id("nombre")).click();
        await driver.findElement(By.id("nombre")).sendKeys("Servicio de Prueba");
        await driver.findElement(By.id("descripcion")).click();
        await driver.findElement(By.id("descripcion")).sendKeys("Testing con selenium");
        await driver.findElement(By.id("btnGuardar")).click();


    } catch (error) {
        console.error('Error durante la prueba:', error);
    } finally {
        await driver.quit();
    }
}

cp_admin_s_01();
