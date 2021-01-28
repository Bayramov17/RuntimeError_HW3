// Hamburger menu Toggle 
const hamburger = document.querySelector(".header .nav-bar .nav-list .hamburger");
const mobile_menu = document.querySelector(".header .nav-bar .nav-list ul");
const menu_item = document.querySelectorAll(".header .nav-bar .nav-list ul li a");
const header = document.querySelector(".header.container");
const changeIcon = document.getElementById("colorIcon")
const changeDivs = document.getElementById("changeDiv")
const red = "rgba(217, 83, 79,0.397)"
const blue = "rgba(40, 106, 204, 0.397)"
const green = "rgba(92, 184, 92,0.397)"
var currentColor=""
var UID = {
  _current: 0,
  getNew: function () {
    this._current++;
    return this._current;
  }
};

HTMLElement.prototype.pseudoStyle = function (element, prop, value) {
  var _this = this;
  var _sheetId = "pseudoStyles";
  var _head = document.head || document.getElementsByTagName('head')[0];
  var _sheet = document.getElementById(_sheetId) || document.createElement('style');
  _sheet.id = _sheetId;
  var className = "pseudoStyle" + UID.getNew();

  _this.className += " " + className;

  _sheet.innerHTML += " ." + className + ":" + element + "{" + prop + ":" + value + "}";
  _head.appendChild(_sheet);
  return this;
};
var isShow = false;
changeIcon.addEventListener("click", function () {
  if (isShow == false) {
    changeDivs.style.left = "0px"
    changeDivs.style.transition = "0.5s"
    isShow = !isShow;
  }
  else {
    changeDivs.style.left = "-50px"
    changeDivs.style.transition = "0.5s"
    isShow = !isShow;
  }
})
function chColor(color) {
  var widPx = window.innerWidth

  if (color == "red") {
    currentColor="rgb(217, 83, 79)"
    document.querySelectorAll(".txtC")
      .forEach(element => {
        element.style.color="rgb(217, 83, 79)"
    });
    header.style.backgroundColor = red
    document.querySelector(".cta").style.backgroundColor = "rgb(217, 83, 79)"
    document.querySelector(".cta").style.borderColor = "rgb(217, 83, 79)"
    document.querySelector(".cta").pseudoStyle("hover", "color", "rgb(217, 83, 79) !important");   
    document.querySelector(".cta").pseudoStyle("hover", "background", "white !important");
    if (document.getElementById("checkbox").checked==true) {
      document.querySelector(".slider ").style.background="rgb(217, 83, 79)"
    }
    else{
      document.querySelector(".slider ").style.background="#ccc"
    }
    document.querySelectorAll(".service-item")
      .forEach(serItem => {
        serItem.pseudoStyle("after", "background", "rgb(217, 83, 79) !important");
      });
    document.querySelectorAll(".project-info")
      .forEach(element => {
        element.style.background = "rgb(217, 83, 79)"
      });
    document.getElementById("footer").style.background = "rgb(217, 83, 79)"
    if (widPx < 1200) {
      document.getElementsByClassName("ulLinks")[0].style.background = "rgb(217, 83, 79)"
    }
    else {
      document.getElementsByClassName("ulLinks")[0].style.background = "transparent"
    }
  }
  else if (color == "blue") {
    currentColor="rgb(40, 106, 204)"
    header.style.backgroundColor = blue
    document.querySelectorAll(".txtC")
      .forEach(element => {
        element.style.color="rgb(40, 106, 204)"
    });
    document.querySelector(".cta").style.backgroundColor = "rgb(40, 106, 204)"
    document.querySelector(".cta").style.borderColor = "rgb(40, 106, 204)"
    document.querySelector(".cta").pseudoStyle("hover", "color", "rgb(40, 106, 204) !important");   
    document.querySelector(".cta").pseudoStyle("hover", "background", "white !important");
    if (document.getElementById("checkbox").checked==true) {
      document.querySelector(".slider ").style.background="rgb(40, 106, 204)"
    }
    else{
      document.querySelector(".slider ").style.background="#ccc"
    }
    
    document.querySelectorAll(".service-item")
      .forEach(serItem => {
        serItem.pseudoStyle("after", "background", "rgb(40, 105, 204) !important");
      });
    document.querySelectorAll(".project-info ")
      .forEach(element => {
        element.style.background = "rgb(40, 106, 204)"
      });
    document.getElementById("footer").style.background = "rgb(40, 106, 204)"
    if (widPx < 1200) {
      document.getElementsByClassName("ulLinks")[0].style.background = "rgb(40, 106, 204)"
    }
    else {
      document.getElementsByClassName("ulLinks")[0].style.background = "transparent"
    }
  }
  else if (color == "green") {
    currentColor="rgb(92, 184, 92)"
    header.style.backgroundColor = green
    document.querySelectorAll(".txtC")
      .forEach(element => {
        element.style.color="rgb(92, 184, 92)"
    });
    document.querySelector(".cta").style.backgroundColor = "rgb(92, 184, 92)"
    document.querySelector(".cta").style.borderColor = "rgb(92, 184, 92)"
    document.querySelector(".cta").pseudoStyle("hover", "color", "rgb(92, 184, 92) !important");   
    document.querySelector(".cta").pseudoStyle("hover", "background", "white !important");
    if (document.getElementById("checkbox").checked==true) {
      document.querySelector(".slider ").style.background="rgb(92, 184, 92)"
    }
    else{
      document.querySelector(".slider ").style.background="#ccc"
    }
    document.querySelectorAll(".service-item")
      .forEach(serItem => {
        serItem.pseudoStyle("after", "background", "rgb(92, 184, 92) !important");
      });
    document.querySelectorAll(".project-info")
      .forEach(element => {
        element.style.background = "rgb(92, 184, 92)"
      });
    document.getElementById("footer").style.background = "rgb(92, 184, 92)"
    if (widPx < 1200) {
      document.getElementsByClassName("ulLinks")[0].style.background = "rgb(92, 184, 92)"
    }
    else {
      document.getElementsByClassName("ulLinks")[0].style.background = "transparent"
    }
  }
}
window.onresize = function (event) {
  if (window.innerWidth >= 1200) {
    document.getElementsByClassName("ulLinks")[0].style.background = "transparent"
  }
  else{
    document.getElementsByClassName("ulLinks")[0].style.background = currentColor
  }
};
hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("active");
  mobile_menu.classList.toggle("active");
});

menu_item.forEach((item) => {
  item.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    mobile_menu.classList.toggle("active");
  });
});



// Dark Mode Toggle 

const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);

  if (currentTheme === 'dark') {
    toggleSwitch.checked = true;
  }
}

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
    document.querySelector(".slider ").style.background=currentColor
  }
  else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
    document.querySelector(".slider ").style.background="#ccc"
  }
}

toggleSwitch.addEventListener('change', switchTheme, false);