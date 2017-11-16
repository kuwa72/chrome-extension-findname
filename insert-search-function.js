var buttons = document.getElementsByClassName('icon-edit');

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", event => {
    window.setTimeout(addSearchFields, 0);
  }, false);
}

function addSearchFields() {
  var ss =  document.getElementsByTagName('select');
  console.log(ss.length);
  for (var i = 0; i < ss.length; i++) {
    var s = ss[i];
    if (!s.getAttribute('filterinserted')) {
      var txt = document.createElement('input');
      txt.setAttribute("type", "text");
      txt.addEventListener("input", withSelectListener(s, txt));
      txt.style.width = '2em';
      s.parentNode.insertBefore(txt, s);
      var o = s.options;
      s.setAttribute('filterinserted',true);
    }
  }
}

function withSelectListener(s, t) {
  var origin = Array.from(s.options);
  var that = this;
  return function(e) {
    s.innerHTML = "";
    for (var i = 0; i < origin.length; i++) {
      var o = origin[i];
      if (o.text.includes(t.value)) {
        s.appendChild(o);
      }
    }
  };
}

addSearchFields();
