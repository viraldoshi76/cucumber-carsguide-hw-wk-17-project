package com.carsguide.www.pages;

import com.carsguide.www.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class NewAndUsedCarPage extends Utility {

    private static final Logger log = LogManager.getLogger(NewAndUsedCarPage.class.getName());

    @FindBy(xpath = "//h1[contains(text(),'New & Used Car Search - carsguide')]" )
    WebElement searchTextVerify;

    @FindBy(xpath = "//select[@id='makes']")
    WebElement selectMake;

    @FindBy(xpath = "//select[@id='models']")
    WebElement selectModel;

    @FindBy(xpath = "//select[@id='locations']")
    WebElement selectLocations;

    @FindBy(xpath = "//select[@id='priceTo']")
    WebElement selectPrice;

    @FindBy(xpath = "//input[@id='search-submit']")
    WebElement clickOnFindButton;

    @FindBy(xpath = "//h1[@class='listing-search-title']")
    WebElement getTextFromTitle;

    public String gettingSearchText(){
        return getTextFromElement(searchTextVerify);
    }

    public void selectMakeOfCar(String make){
        selectByVisibleTextFromDropDown(selectMake,make);
    }

    public void selectModelOfCar(String model){
        selectByVisibleTextFromDropDown(selectModel,model);
    }

    public void selectLocationsOfCar(String location){
        selectByVisibleTextFromDropDown(selectLocations, location);
    }

    public void selectPriceOfCar(String price){
        selectByVisibleTextFromDropDown(selectPrice,price);
    }

    public void clickOnFindButton(){
        clickOnElement(clickOnFindButton);
    }

    public String gettingTextFromTitle(){
        return getTextFromElement(getTextFromTitle);
    }

}
