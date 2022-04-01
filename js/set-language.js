var langList=document.querySelector(".lang-list");

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
    lang=langList.value; 
    document.getElementsByTagName('html')[0].setAttribute('lang',lang);
    datadefault=dataen;
    langDict=eval("data"+lang);
    window.location.hash="#"+lang;
    mostrarTexto(langDict);
  
    if(langDict==dataes){
        fullNameInput.placeholder= "Nombre y apellido";
        subjectInput.placeholder= "Asunto";
        messageInput.placeholder= "Escribe aqui tu mensaje";
        mail.href="mailto:dhlarrotar@outlook.com?&subject=Hola Daniel!";


    }

    if(langDict==dataen){
        fullNameInput.placeholder= "Full name";
        subjectInput.placeholder= "Subject";
        messageInput.placeholder= "Your message";
        mail.href="mailto:dhlarrotar@outlook.com?&subject=Hi Daniel!";

    }
 
    console.log(langDict);
}





