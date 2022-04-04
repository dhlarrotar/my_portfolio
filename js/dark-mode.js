var darkMode=document.getElementById("switch");
var html= document.querySelector("html")


darkMode.onchange=setTheme;
darkColors= Object.keys(darkMode);

function setTheme(){
    if(darkMode.checked==true){
        document.querySelector("html").classList.add("dark");
    }  
    else{
        document.querySelector("html").classList.remove("dark");
    }     
}

