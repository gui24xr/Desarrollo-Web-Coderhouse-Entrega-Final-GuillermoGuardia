/*MENU DESPLEGABLE -----------------------*/

const navToggle = document.querySelector(".header_nav_toggle");
const navMenu = document.querySelector(".nav_lista_secciones_sitio");

navToggle.addEventListener("click", mi_funcion);

function mi_funcion(){

  navMenu.classList.toggle("nav_lista_secciones_sitio_visible");
  //suscripcionPanel.classList.toggle("div_suscripcion_visible");
}

/////////////////////////////////////////////////////
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

//------------------------------------------------------------

const contenedor_slider = document.querySelector(".container_slider");
//const frame1 = document.querySelector(".frame1");

var banners =[];
let contador = 1;

banners[1] = document.querySelector(".frame1");
banners[2] = document.querySelector(".frame2");
banners[3] = document.querySelector(".frame3");
banners[4] = document.querySelector(".frame4");

socialBar.addEventListener("click", carrusel);


function carrusel(){

  //frame1.classList.toggle("frame5");
  

//Aca le agrego la clase para mostrar al que quiero mostrar.
banners[contador].classList.toggle("visibilizar_frame");

contador += 1;

// y a los otros div les tengo que quitar esa clase.
/*var i; 
for (i=0;i<=5;i++) { 
   	if (i != contador){banners[contador].classList.remove("frame5");}
} 
*/
if (contador > 4){ contador = 1;}

}





