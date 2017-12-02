function saveOptions(e) {
  browser.storage.local.set({
    urls: document.querySelector("#urls").value
  });
  e.preventDefault();
}

function restoreOptions() {
  var gettingItem = browser.storage.local.get('urls');
  gettingItem.then((res) => {
    document.querySelector("#urls").value = res.urls || ''
  });
}

document.addEventListener('DOMContentLoaded', restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);
