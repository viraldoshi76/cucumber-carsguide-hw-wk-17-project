package com.carsguide.www.cucumber.stepDefs;

import com.carsguide.www.pages.HomePage;
import com.carsguide.www.pages.NewAndUsedCarPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class SearchDefs {
    @Given("^I am on homepage$")
    public void iAmOnHomepage() {
    }

    @When("^I mouse hover on buy\\+sell tab$")
    public void iMouseHoverOnBuySellTab() {
        new HomePage().hooverOnBuySellTab();
    }

    @And("^I click Search Cars$")
    public void iClickSearchCars() {
        new HomePage().clickOnSearchCarsLink();
    }

    @Then("^I navigate to new and used car search page \"([^\"]*)\"$")
    public void iNavigateToNewAndUsedCarSearchPage(String actualMessage)  {
        Assert.assertTrue(new NewAndUsedCarPage().gettingSearchText().contains(actualMessage));
    }

    @And("^I select make \"([^\"]*)\"$")
    public void iSelectMake(String make)  {
        new NewAndUsedCarPage().selectMakeOfCar(make);

    }

    @And("^I select model \"([^\"]*)\"$")
    public void iSelectModel(String model)  {
        new NewAndUsedCarPage().selectModelOfCar(model);
    }

    @And("^I select location \"([^\"]*)\"$")
    public void iSelectLocation(String location)  {
        new NewAndUsedCarPage().selectLocationsOfCar(location);
    }

    @And("^I select price \"([^\"]*)\"$")
    public void iSelectPrice(String price)  {
        new NewAndUsedCarPage().selectPriceOfCar(price);
    }

    @And("^I click on Find My Next Car tab$")
    public void iClickOnFindMyNextCarTab() {
        new NewAndUsedCarPage().clickOnFindButton();
    }

    @Then("^I should see the make \"([^\"]*)\" in results$")
    public void iShouldSeeTheMakeInResults(String make)  {
        Assert.assertTrue(new NewAndUsedCarPage().gettingTextFromTitle().contains(make));
    }
}
