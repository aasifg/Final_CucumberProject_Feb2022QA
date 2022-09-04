$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/features/finalcucumber.feature");
formatter.feature({
  "line": 3,
  "name": "Change of BackGround color project",
  "description": "",
  "id": "change-of-background-color-project",
  "keyword": "Feature",
  "tags": [
    {
      "line": 2,
      "name": "@BackgroundColor"
    }
  ]
});
formatter.before({
  "duration": 2663554900,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 8,
  "name": "Sky Blue Background",
  "description": "",
  "id": "change-of-background-color-project;sky-blue-background",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@Scenario1"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I am on the provided url",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "Set SkyBlue button exists",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I click on the button",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "The background color will change to sky blue",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.I_am_on_the_provided_url_page()"
});
formatter.result({
  "duration": 84528300,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.Set_SkyBlue_button_exists()"
});
formatter.result({
  "duration": 17200,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.I_click_on_the_button()"
});
formatter.result({
  "duration": 5163666000,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.The_background_color_will_change_to_sky_blue()"
});
formatter.result({
  "duration": 43900,
  "status": "passed"
});
formatter.before({
  "duration": 1689874400,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 15,
  "name": "White background change",
  "description": "",
  "id": "change-of-background-color-project;white-background-change",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 17,
  "name": "skywhite background button exits",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "I click on the button",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "the background color will change to white",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.skywhite_background_button_exits()"
});
formatter.result({
  "duration": 5161692200,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.I_click_on_the_button()"
});
formatter.result({
  "duration": 5151555400,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.the_background_color_will_change_to_white()"
});
formatter.result({
  "duration": 27700,
  "status": "passed"
});
});