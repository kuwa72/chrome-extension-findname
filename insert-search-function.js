var addedElements = [];

var buttons = document.getElementsByClassName('icon-edit');

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", event => {
    console.log("clicked");
    window.setTimeout(addSearchTag, 100);
  }, false);
}

function addSearchTag() {
  var ss =  document.getElementsByTagName('select');
  console.log(ss.length);
  for (var i = 0; i < ss.length; i++) {
    var s = ss[i];
    if (addedElements.includes(s)) {
      console.log("filled");
    } else {
      var txt = document.createElement('input');
      txt.setAttribute("type", "text");
      txt.addEventListener("input", withSelectListener(s, txt));
      txt.style.width = '4em';
      s.parentNode.insertBefore(txt, s);
      var o = s.options;
      for (var j = 0; j < o.length; j++) {
        o[j].setAttribute("fnoriginaltext", o[j].text);
      }
      addedElements.push(s);
    }
  }
}

function withSelectListener(s, t) {
  return function(e) {
    for (var i = 0; i < s.options.length; i++) {
      var o = s.options[i];
      o.disabled = !o.getAttribute("fnoriginaltext").includes(t.value);
      o.text = o.disabled ? '' : o.getAttribute("fnoriginaltext");
    }
  };
}
