package Pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class Page1 {

	WebDriver driver;

	@FindBy(how = How.XPATH, using = "//button[text()='Set SkyBlue Background']")
	WebElement SKY_BLUE_ELEMENT;

	@FindBy(how = How.XPATH, using = "//button[text()='Set White Background']")
	WebElement White_Background_ELEMENT;
	
	public void changeBackground() {
		SKY_BLUE_ELEMENT.click();

		try {
			Thread.sleep(5000);
		} catch (InterruptedException e) {

			e.printStackTrace();
		}

		White_Background_ELEMENT.click();

	}
}
