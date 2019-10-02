function logHelloWorld() {
  console.log("Hello world");
}

chrome.browserAction.onClicked.addListener(logHelloWorld);
