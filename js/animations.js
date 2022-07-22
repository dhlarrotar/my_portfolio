let section = document.querySelectorAll("section");
let menu = document.querySelectorAll("header nav a");
reveal();

window.onscroll = () => {
  showArrowTop();
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
  showHeaderBorder();
  

});

// To check the scroll position on page load





var headerPrincipal=document.querySelector(".headerPrincipal");
var menuButton=document.querySelector(".menuButton");
var closeMenu=document.querySelector(".closeMenu");
var header= document.querySelector("header");
var arrowTop= document.querySelector(".arrowTopButton");

var settingsSection=document.querySelector(".settingsContainer");
var headerArrowDown=document.querySelector("#headerMenuShow");
var headerArrowUp=document.querySelector("#headerMenuHide");

headerArrowUp.style.display ="none"; 

menuButton.onclick=showMenu;
closeMenu.onclick=hideMenu;
arrowTop.addEventListener("click",function(evt){
  evt.preventDefault();
  window.scrollTo(0,0);
  hideArrowTop();

});



headerArrowDown.onclick=showSettings;


headerArrowUp.onclick=hideSettings;



function showSettings(){
  headerArrowDown.style.display ="none"; 
  headerArrowUp.style.display ="flex"; 
  settingsSection.style.display ="flex"; 
}

function hideSettings(){
  headerArrowUp.style.display ="none"; 
  headerArrowDown.style.display ="flex";
  settingsSection.style.display ="none";  
}



function showArrowTop(){
  arrowTop.style.display ="flex"; 
}


function hideArrowTop(){
  arrowTop.style.display ="none"; 
}


function showMenu(){
  headerPrincipal.style.display ="flex";
  closeMenu.style.display ="flex";
  
}


function hideMenu(){
  headerPrincipal.style.display ="none";
  closeMenu.style.display ="none";
  
}



function showHeaderBorder(){
  header.classList.add("header-border");
}


