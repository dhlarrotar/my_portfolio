var langList=document.querySelector(".lang-list");

var fullNameInput= document.getElementById("full-name");
var mailInput= document.getElementById("correoelectronico");
var messageInput= document.getElementById("message");
var mail=document.getElementById("mail");




setLanguage()

langList.onchange=setLanguage;


if(window.location.hash){
    langList.value=window.location.hash.replace("#","");
    setLanguage();
}




function mostrarTexto(langDict){
    langDictKeys=Object.keys(langDict);
    for(let element of langDictKeys){
        var elementObject=document.querySelectorAll(element);
        for (object of elementObject){
            if(object){
                object.innerHTML=langDict[element];
            }
        }
    }
}


function setLanguage(){
 
    var cv= document.querySelector("#cv-download");

    lang=langList.value; 
    document.getElementsByTagName('html')[0].setAttribute('lang',lang);
    datadefault=dataen;
    langDict=eval("data"+lang);
    window.location.hash="#"+lang;
    mostrarTexto(langDict);
    if(langDict==dataes){
        fullNameInput.placeholder= "Tu nombre aquí";
        mailInput.placeholder= "email@dominio.com";
        messageInput.placeholder= "Escribe aquí tu mensaje";
        mail.href="mailto:dhlarrotar@outlook.com?&subject=Hola Daniel!";
        enviar.value="Enviar mensaje";

        cv.setAttribute("href","daniel_larrota_cv_es.pdf");
    


    }

    if(langDict==dataen){
        fullNameInput.placeholder= "Your name here";
        mailInput.placeholder= "email@domain.com";
        messageInput.placeholder= "Your message here";
        mail.href="mailto:dhlarrotar@outlook.com?&subject=Hi Daniel!";
        enviar.value="Send message";

        cv.setAttribute("href","daniel_larrota_cv_en.pdf");

   
    }
 
}





