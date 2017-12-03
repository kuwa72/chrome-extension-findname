chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript(null, {file: "insert-search-function.js"});
});
/*
function handleClick() {
  browser.runtime.openOptionsPage();
}
browser.browserAction.onClicked.addListener(handleClick);
*/
chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
  if (changeInfo.status == 'complete') {
    var urls = localStorage.getItem("urls");
    if (urls.split("\n")
      .filter(x => x != '')
      .map(x => new RegExp(x))
      .some(x => tab.url.match(x))) {
      chrome.tabs.executeScript(null, {file: "insert-search-function.js"});
    }
  }
});
