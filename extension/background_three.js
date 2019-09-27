// when extension button is clicked
chrome.browserAction.onClicked.addListener(function() {
  // take a screenshot of the current tab
  chrome.tabs.captureVisibleTab(function(screenshotUrl) {
    // creat the url for the new tab with the screenshot url as a parameter
    var viewTabUrl = chrome.extension.getURL(
      "screenshot.html?screenshotUrl=" + screenshotUrl
    );
    // create a new tab to show the screenshot
    chrome.tabs.create({ url: viewTabUrl });
  });
});
