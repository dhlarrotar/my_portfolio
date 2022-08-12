
document.onreadystatechange = function () {
  if (document.readyState !== "complete") {
    document.querySelector(".bodyContent").style.visibility = "hidden";
    document.querySelector(".loader").style.visibility = "visible";
  } else {
    document.querySelector(".loader").style.display = "none";
    document.querySelector(".bodyContent").style.visibility = "visible";
  }
};