/*const navToggle = document.querySelector(".header_nav_toggle");
const navMenu = document.querySelector(".nav_lista_secciones_sitio");

//const suscripcionPanel = querySelector(".div_suscripcion");



navToggle.addEventListener("click", () => {
  
  navMenu.classList.toggle("nav_lista_secciones_sitio_visible");
  //suscripcionPanel.classList.toggle("div_suscripcion_visible");
  //navMenu.classList.toggle("div_suscripcion_visible");
 

  if (navMenu.classList.contains("menu_header_nav_var")) {
    navToggle.setAttribute("aria-label", "Cerrar menú");
  } else {
    navToggle.setAttribute("aria-label", "Abrir menú");
  }
});*/



//const navLogo = document.querySelector(".header_nav_logo1");


///navLogo.addEventListener("click", () => {
 
  //suscripcionPanel.classList.toggle("div_suscripcion_visible");

//})


/* ACA LA PRUEBA -----------------------*/

const navToggle = document.querySelector(".header_nav_toggle");
const navMenu = document.querySelector(".nav_lista_secciones_sitio");

const buttonActiveSuscripcion = document.querySelector(".boton_activar_suscripcion");
const suscripcionPanel = document.querySelector(".div_suscripcion");

const buttonActiveSocialBar = document.querySelector(".boton_activar_social_bar");
const socialBar = document.querySelector(".social_bar");

const buttonIntroToggle = document.querySelector(".intro_toggle")
const buttonCloseIntro = document.querySelector(".close_intro_toggle");
const portadaIntro = document.querySelector(".portada_intro");

const buttonNoticiasToggle = document.querySelector(".noticias_toggle");
const portadaNoticias = document.querySelector(".portada_noticias");
const buttonCloseNoticias = document.querySelector(".close_noticias_toggle");


//------------------------------------------------------------------------------------
navToggle.addEventListener("click", mi_funcion);

function mi_funcion(){

  navMenu.classList.toggle("nav_lista_secciones_sitio_visible");
  //suscripcionPanel.classList.toggle("div_suscripcion_visible");
}

// ------------------------------------------------------------------------------------

buttonActiveSuscripcion.addEventListener("click", mi_funcion2);

function mi_funcion2(){

  //navMenu.classList.toggle("nav_lista_secciones_sitio_visible");
  suscripcionPanel.classList.toggle("div_suscripcion_visible");
}

//-------------------------------------------------------------------------------------

buttonActiveSocialBar.addEventListener("click", mi_funcion3);

function mi_funcion3(){

  //navMenu.classList.toggle("nav_lista_secciones_sitio_visible");
  socialBar.classList.toggle("social_bar_visible");
}

//-------------------------------------------------------------------------------------


buttonIntroToggle.addEventListener("click", mi_funcion4);

function mi_funcion4(){

  //navMenu.classList.toggle("nav_lista_secciones_sitio_visible");
  portadaIntro.classList.remove("intro_visible_off");
  portadaIntro.classList.toggle("intro_visible_on");
}


buttonCloseIntro.addEventListener("click", mi_funcion5);

function mi_funcion5(){

  //navMenu.classList.toggle("nav_lista_secciones_sitio_visible");
  //portadaIntro.classList.remove("intro_visible_on");
  portadaIntro.classList.remove("intro_visible_on");
  portadaIntro.classList.toggle("intro_visible_off");
}


//-----------------------------------------------

buttonNoticiasToggle.addEventListener("click", mi_funcion6);

function mi_funcion6(){

  //navMenu.classList.toggle("nav_lista_secciones_sitio_visible");
  //portadaNoticias.classList.remove("intro_visible_off");
  portadaNoticias.classList.toggle("noticias_visible");
}
