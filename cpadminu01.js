const { Builder, By, Key, until } = require('selenium-webdriver');
const assert = require('assert');

async function cp_admin_u_01() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.get("https://yufa.hackerutd.online/html/login.html");
        await driver.manage().window().setRect({ width: 1053, height: 799 });
        await driver.findElement(By.id("usuario")).sendKeys("admin");
        await driver.findElement(By.id("password")).sendKeys("admin");
        await driver.findElement(By.id("enviar")).click();
        await driver.findElement(By.css(".swal2-confirm")).click();
        await driver.findElement(By.linkText("Ver Usuarios")).click();
        await driver.findElement(By.css(".odd .btn-primary > .material-icons")).click();
        await driver.findElement(By.id("ape2")).click();
        await driver.findElement(By.id("ape1")).click();
        await driver.findElement(By.id("nombre")).click();
        {
            const element = await driver.findElement(By.id("nombre"))
            await driver.actions({ bridge: true}).doubleClick(element).perform()
        }
        await driver.findElement(By.id("nombre")).sendKeys("Dante");
        await driver.findElement(By.id("nombre")).sendKeys(Key.ENTER);

    } catch (error) {
        console.error('Error durante la prueba:', error);
    } finally {
        await driver.quit();
    }
}

cp_admin_u_01();
