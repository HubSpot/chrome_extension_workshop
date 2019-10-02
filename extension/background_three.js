function downloadScreenshot(screenshotUrl) {
  // download screenshot file
  chrome.downloads.download({
    url: screenshotUrl
  });
}

function takeScreenshot() {
  // take a screenshot of the current tab
  chrome.tabs.captureVisibleTab(downloadScreenshot);
}

// when extension button is clicked
chrome.browserAction.onClicked.addListener(takeScreenshot);
