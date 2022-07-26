var myVar;

function loadWebsite() {
  myVar = setTimeout(showPage, 2000);
}

function showPage() {
document.querySelector(".loader").style.display = "none";
setTimeout(document.querySelector(".bodyContent").style.display = "block", 1000);
;
}


