const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('cp_admin_u_01', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('cp_admin_u_01', async function() {
    await driver.get("https://yufa.hackerutd.online/html/login.html")
    await driver.manage().window().setRect({ width: 1053, height: 799 })
    await driver.findElement(By.id("usuario")).sendKeys("admin")
    await driver.findElement(By.id("password")).sendKeys("admin")
    await driver.findElement(By.id("enviar")).click()
    await driver.findElement(By.css(".swal2-confirm")).click()
    await driver.findElement(By.linkText("Ver Usuarios")).click()
    await driver.findElement(By.css(".odd .btn-primary > .material-icons")).click()
    await driver.findElement(By.id("ape2")).click()
    await driver.findElement(By.id("ape1")).click()
    await driver.findElement(By.id("nombre")).click()
    await driver.findElement(By.id("nombre")).click()
    {
      const element = await driver.findElement(By.id("nombre"))
      await driver.actions({ bridge: true}).doubleClick(element).perform()
    }
    await driver.findElement(By.id("nombre")).sendKeys("Dante")
    await driver.findElement(By.id("nombre")).sendKeys(Key.ENTER)
  })
})
