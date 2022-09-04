package steps;

import org.openqa.selenium.By;
import org.openqa.selenium.support.PageFactory;

import Pages.Page1;
import Pages.browserPage;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class stepDefinitions extends browserPage {

	Page1 page1;

	@Before
	public void methodName() {
		initDriver();
		page1 = PageFactory.initElements(driver, Page1.class);

	}

	@Given("^I am on the provided url$")
	public void I_am_on_the_provided_url_page() {

	}

	@When("^Set SkyBlue button exists$")
	public void Set_SkyBlue_button_exists() {
//		Assert.assertTrue(driver.findElement(By.xpath("//button[contains(text(), 'Set SkyBlue Background')]")).isEnabled());
	}

	@Then("^I click on the button$")
	public void I_click_on_the_button() {
		page1.changeBackground();

	}

	@Then("^The background color will change to sky blue$")
	public void The_background_color_will_change_to_sky_blue() {

	}

	@When("^skywhite background button exits$")
	public void skywhite_background_button_exits() {
		page1.changeBackground();
	}

	@Then("^the background color will change to white$")
	public void the_background_color_will_change_to_white() {
		
	}

}