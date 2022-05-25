let section = document.querySelectorAll("section");
let menu = document.querySelectorAll("header nav a");
reveal();

window.onscroll = () => {

  section.forEach((i) => {
    let top = window.scrollY;
    let offset = i.offsetTop - 150;
    let height = i.offsetHeight;
    let id = i.getAttribute("id");

    if (top >= offset && top < offset + height) {
      menu.forEach((link) => {
        link.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", function(){
  reveal();
  hideButtons();
  showHeaderBorder();
  

});

// To check the scroll position on page load





var hiddenButtons=document.querySelector("#hidden-buttons");
var floatButtons=document.querySelector(".float-buttons");
var floatText=document.querySelector("#float-text");
var floatClose=document.querySelector("#float-close");
var header= document.querySelector("header");



var menuNav=document.querySelector(".menu");
var menuArrow=document.querySelector("#arrow-menu");


floatButtons.onclick=showHiddenButtons;
menuArrow.onclick=showMenu;


function showHiddenButtons(){
  hiddenButtons.classList.remove("fade-out");
  floatText.classList.add("fade-out");
  setTimeout(hideButtons,8000)
  
}

function hideButtons(){
  hiddenButtons.classList.add("fade-out");
  floatText.classList.remove("fade-out");
  
}


function showMenu(){
 menuNav.style.display = "block";
 menuArrow.style.display = "none";
 setTimeout(hideMenu,8000)
  
}

function showHeaderBorder(){
  header.classList.add("header-border");
}


function hideMenu(){
  menuNav.style.display = "none";
  menuArrow.style.display = "block";
  
}
