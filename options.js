function saveOptions(e) {
  localStorage.setItem("urls", document.querySelector("#urls").value);
  e.preventDefault();
}

function restoreOptions() {
    document.querySelector("#urls").value = localStorage.getItem("urls");
}

document.addEventListener('DOMContentLoaded', restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);
