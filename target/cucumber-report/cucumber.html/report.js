$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/resources/featurefiles/buy.feature");
formatter.feature({
  "line": 1,
  "name": "Search Functiionality",
  "description": "As a User I should login into carsguide website",
  "id": "search-functiionality",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "User should Search the buy car with model",
  "description": "",
  "id": "search-functiionality;user-should-search-the-buy-car-with-model",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I mouse hover on buy+sell tab",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I click Search Cars",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I navigate to new and used car search page \"New \u0026 Used Car Search - carsguide\"",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I select make \"\u003cmake\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select model \"\u003cmodel\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select location \"\u003clocation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select price \"\u003cprice\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I should see the make \"\u003cmake\u003e\" in results",
  "keyword": "Then "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "search-functiionality;user-should-search-the-buy-car-with-model;",
  "rows": [
    {
      "cells": [
        "make",
        "model",
        "location",
        "price"
      ],
      "line": 17,
      "id": "search-functiionality;user-should-search-the-buy-car-with-model;;1"
    },
    {
      "cells": [
        "Nissan",
        "Fuga",
        "NSW - Newcastle",
        "$60,000"
      ],
      "line": 18,
      "id": "search-functiionality;user-should-search-the-buy-car-with-model;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 33798479400,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "User should Search the buy car with model",
  "description": "",
  "id": "search-functiionality;user-should-search-the-buy-car-with-model;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I mouse hover on buy+sell tab",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I click Search Cars",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I navigate to new and used car search page \"New \u0026 Used Car Search - carsguide\"",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I select make \"Nissan\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select model \"Fuga\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select location \"NSW - Newcastle\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select price \"$60,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I should see the make \"Nissan\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SearchDefs.iAmOnHomepage()"
});
formatter.result({
  "duration": 1635023300,
  "status": "passed"
});
formatter.match({
  "location": "SearchDefs.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 923752900,
  "status": "passed"
});
formatter.match({
  "location": "SearchDefs.iClickSearchCars()"
});
formatter.result({
  "duration": 10159871200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "New \u0026 Used Car Search - carsguide",
      "offset": 44
    }
  ],
  "location": "SearchDefs.iNavigateToNewAndUsedCarSearchPage(String)"
});
formatter.result({
  "duration": 135514400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nissan",
      "offset": 15
    }
  ],
  "location": "SearchDefs.iSelectMake(String)"
});
formatter.result({
  "duration": 925002200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Fuga",
      "offset": 16
    }
  ],
  "location": "SearchDefs.iSelectModel(String)"
});
formatter.result({
  "duration": 1131604700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NSW - Newcastle",
      "offset": 19
    }
  ],
  "location": "SearchDefs.iSelectLocation(String)"
});
formatter.result({
  "duration": 594149000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$60,000",
      "offset": 16
    }
  ],
  "location": "SearchDefs.iSelectPrice(String)"
});
formatter.result({
  "duration": 693876100,
  "status": "passed"
});
formatter.match({
  "location": "SearchDefs.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 9669050800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nissan",
      "offset": 23
    }
  ],
  "location": "SearchDefs.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 10279102500,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//h1[@class\u003d\u0027listing-search-title\u0027]\"}\n  (Session info: chrome\u003d91.0.4472.77)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-K2RFLLMD\u0027, ip: \u0027192.168.1.85\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_281\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 91.0.4472.77, chrome: {chromedriverVersion: 90.0.4430.24 (4c6d850f087da..., userDataDir: C:\\Users\\virohi\\AppData\\Loc...}, goog:chromeOptions: {debuggerAddress: localhost:49844}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: bef4014def292e4e9c46b4d801cc8a67\n*** Element info: {Using\u003dxpath, value\u003d//h1[@class\u003d\u0027listing-search-title\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy18.getText(Unknown Source)\r\n\tat com.carsguide.www.utility.Utility.getTextFromElement(Utility.java:50)\r\n\tat com.carsguide.www.pages.NewAndUsedCarPage.gettingTextFromTitle(NewAndUsedCarPage.java:59)\r\n\tat com.carsguide.www.cucumber.stepDefs.SearchDefs.iShouldSeeTheMakeInResults(SearchDefs.java:60)\r\n\tat ✽.Then I should see the make \"Nissan\" in results(src/test/java/resources/featurefiles/buy.feature:15)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 5185998100,
  "status": "passed"
});
});