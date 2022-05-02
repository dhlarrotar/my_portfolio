let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides1");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  
}




function changeSlide(){
    slideIndex++;
    if(slideIndex>3){
        return slideIndex=0;
    }
    showSlides(slideIndex)
    
}



setInterval(changeSlide, 15000); // Change image every 2 seconds


var webDesign=document.querySelector("#projects-gallery");
var researchArea=document.querySelector("#research-gallery");
var webButton=document.querySelector("#web-design-button");
var researchButton=document.querySelector("#research-button");

showWebDesign();
webButton.onclick=showWebDesign;
researchButton.onclick=showResearch;



 function showWebDesign(){
  webDesign.style.display = "inline-block";
  researchArea.style.display = "none";
  webButton.classList.add("active");
  researchButton.classList.remove("active");
 }


function showResearch(){
  webDesign.style.display = "none";
  researchArea.style.display = "inline-block";
  researchButton.classList.add("active");
  webButton.classList.remove("active");


}
