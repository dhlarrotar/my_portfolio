let section = document.querySelectorAll("section");
let menu = document.querySelectorAll("header nav a");
reveal();

window.onscroll = () => {
  showArrowTop();
  if(screen.width<=822){
  hideMenu()};
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
var closeMenu=document.querySelector(".closeMenuButton");
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
  settingsSection.classList.add("fade-bottom")
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
  headerPrincipal.classList.add("fade-left");
  menuButton.style.display ="none";
  
}


function hideMenu(){
  headerPrincipal.style.display ="none";
  closeMenu.style.display ="none";
  menuButton.style.display ="flex";
  
}



function showHeaderBorder(){
  header.classList.add("header-border");
}








var researchGallery=document.querySelector(".researchGallery");
var projectsGallery=document.querySelector(".projectsGallery");
var projectButton=document.querySelector("#projectsWeb-button");
var researchButton=document.querySelector("#research-button");
var gisButton=document.querySelector("#projectsgis-button");
var gisGallery=document.querySelector(".gisGallery");

gisGallery.style.display="none";
gisButton.classList.remove("active");

function showResearch(){
  projectsGallery.style.display="none";
  researchGallery.style.display="inline-block";
  researchButton.classList.add("active");
  projectButton.classList.remove("active");
  gisGallery.style.display="none";
  gisButton.classList.remove("active");
}

function showProjects(){
  projectsGallery.style.display="inline-block";
  researchGallery.style.display="none";
  researchButton.classList.remove("active");
  projectButton.classList.add("active");
  gisGallery.style.display="none";
  gisButton.classList.remove("active");
}



function showGis(){
  projectsGallery.style.display="none";
  researchGallery.style.display="none";
  researchButton.classList.remove("active");
  projectButton.classList.remove("active");
  gisGallery.style.display="inline-block";
  gisButton.classList.add("active");
}



projectButton.onclick=showProjects;
researchButton.onclick=showResearch;
gisButton.onclick=showGis;

showGis()