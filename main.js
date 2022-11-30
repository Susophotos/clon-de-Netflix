    //  Parte de preguntas frecuentes y respuesta:

let btn_0 = document.querySelector(".btn__preguntas0");
let btn_0Close = document.getElementById("btn__preguntas0-close");
let btn_1 = document.getElementById("btn__preguntas1");
let btn_1Close = document.querySelector("#btn__preguntas1-close");
let btn_2 = document.getElementById("btn__preguntas2");
let btn_2Close = document.querySelector("#btn__preguntas2-close");
let btn_3 = document.getElementById("btn__preguntas3");
let btn_3Close = document.querySelector("#btn__preguntas3-close");
let btn_4 = document.getElementById("btn__preguntas4");
let btn_4Close = document.querySelector("#btn__preguntas4-close");
let btn_5 = document.getElementById("btn__preguntas5");
let btn_5Close = document.querySelector("#btn__preguntas5-close");
let btn_6 = document.getElementById("btn__preguntas6");
let btn_6Close = document.querySelector("#btn__preguntas6-close");


let respuesta0 = document.querySelector(".section__preguntas--respuesta1");
let respuesta1 = document.querySelector(".section__preguntas--respuesta2");
let respuesta2 = document.querySelector(".section__preguntas--respuesta3");
let respuesta3 = document.querySelector(".section__preguntas--respuesta4");
let respuesta4 = document.querySelector(".section__preguntas--respuesta5");
let respuesta5 = document.querySelector(".section__preguntas--respuesta6");
let respuesta6 = document.querySelector(".section__preguntas--respuesta7");





function respuestaOpen(btnOpen, btnClose, respuesta){
   btnOpen.addEventListener("click", (e) => {
      e.preventDefault();
      respuesta.classList.remove("d-none");
      btnOpen.classList.add("d-none");
      btnClose.classList.remove("d-none");
      
   })
};

function respuestaClose(btnOpen, btnClose, respuesta){
   btnClose.addEventListener("click", (e) => {
      e.preventDefault();
      respuesta.classList.add("d-none");
      btnClose.classList.add("d-none");
      btnOpen.classList.remove("d-none");
   });
}
respuestaOpen(btn_0, btn_0Close, respuesta0);
respuestaClose(btn_0, btn_0Close, respuesta0);

respuestaOpen(btn_1, btn_1Close, respuesta1);
respuestaClose(btn_1, btn_1Close, respuesta1);

respuestaOpen(btn_2, btn_2Close, respuesta2);
respuestaClose(btn_2, btn_2Close, respuesta2);

respuestaOpen(btn_3, btn_3Close, respuesta3);
respuestaClose(btn_3, btn_3Close, respuesta3);

respuestaOpen(btn_4, btn_4Close, respuesta4);
respuestaClose(btn_4, btn_4Close, respuesta4);

respuestaOpen(btn_5, btn_5Close, respuesta5);
respuestaClose(btn_5, btn_5Close, respuesta5);

respuestaOpen(btn_6, btn_6Close, respuesta6);
respuestaClose(btn_6, btn_6Close, respuesta6);