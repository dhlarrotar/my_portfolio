var myVar;

function loadWebsite() {
  myVar = setTimeout(showPage, 3000);
}

function showPage() {
document.querySelector(".loader").style.display = "none";
document.querySelector(".bodyContent").style.display = "block";
}


