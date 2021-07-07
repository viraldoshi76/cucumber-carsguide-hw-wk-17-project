package com.carsguide.www.pages;

import com.carsguide.www.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import sun.rmi.runtime.Log;

public class HomePage extends Utility {

    private static final Logger log = LogManager.getLogger(HomePage.class.getName());

    @FindBy(xpath = "//a[contains(text(),'buy + sell')]")
    WebElement mouseHoverOnBuySellTab;

    @FindBy(xpath = "//a[contains(text(),'Search Cars')]")
    WebElement searchCarsLink;

    public void hooverOnBuySellTab(){
        mouseHoverToElement(mouseHoverOnBuySellTab);
    }

    public void clickOnSearchCarsLink(){
        clickOnElement(searchCarsLink);
    }


}
