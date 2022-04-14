var inputContacto= document.querySelectorAll(".input-contacto");


var form= document.getElementById("contact-form");
var success= document.getElementById("message-success");


var fullNameInput= document.getElementById("full-name");
var mailInput= document.getElementById("correoelectronico");
var messageInput= document.getElementById("message");

enviar=document.querySelector(".enviar");

var mail= document.getElementById("mail");

var errorName=document.getElementById("error-full-name")
var errorMail=document.getElementById("error-mail-input")
var errorMensaje=document.getElementById("error-message")


var nombreAceptado=false;
var mailAceptado=false;
var mensajeAceptado=false;




 
fullNameInput.addEventListener("input", function(){
    validarValores();
    inputValue= fullNameInput.value;
    inputLength=inputValue.length;
    if(inputLength<=50 && inputLength!=0){
        fullNameInput.classList.remove("error-form"); 
        nombreAceptado=true; 
        errorName.classList.add("fadeOut");
    }
    else{
        nombreAceptado=false;
        fullNameInput.classList.add("error-form");
        errorName.classList.remove("fadeOut");
    }
    validarValores();
});



mailInput.addEventListener("input", function(){
    
    inputValue= mailInput.value;
    inputLength=inputValue.length;
    if(inputLength!=0 && inputValue.includes("@") && inputValue.includes(".")){
        mailAceptado=true;
        mailInput.classList.remove("error-form");
        errorMail.classList.add("fadeOut");
   
    }
    else{
        mailAceptado=false;
        mailInput.classList.add("error-form");
        errorMail.classList.remove("fadeOut");  
    }
    validarValores();
});





messageInput.addEventListener("input", function(){
   
    inputValue= messageInput.value;
    inputLength=inputValue.length;
    if(inputLength<=300 && inputLength!=0){
        mensajeAceptado=true;
        messageInput.classList.remove("error-form");
        errorMensaje.classList.add("fadeOut");      
    }
    else{
        mensajeAceptado=false;
        messageInput.classList.add("error-form");
        errorMensaje.classList.remove("fadeOut");  
    }
    validarValores();
});





function validarValores(){
    if(nombreAceptado==true && mailAceptado==true && mensajeAceptado==true){
        enviar.removeAttribute("disabled");
    }
    else{
        enviar.setAttribute("disabled","true");
    } 
}



var recievedMessages=[];

function enviarFormulario(){
    var userMessage={};
    for(let element of inputContacto){
        id=element.getAttribute("id");
        value= element.value;
        userMessage[id]=value;
        element.value="";
    }
    recievedMessages.push(userMessage);
    form.classList.add("hide");
    success.classList.remove("hide");

    
}


enviar.onclick=enviarFormulario;