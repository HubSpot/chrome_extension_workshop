function getScreenshotSrcFromUrl() {
  var vars = {};
  var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(
    m,
    key,
    value
  ) {
    vars[key] = value;
  });
  return vars;
}

function setImageSrc() {
  const screenshotUrl = getScreenshotSrcFromUrl()["screenshotUrl"];
  // set screenshot image "src" attribute
  document.getElementById("screenshot").src = screenshotUrl;
  // set download link "href" attribute
  document.getElementById("downloadLink").href = screenshotUrl;
}

window.onload = setImageSrc;
