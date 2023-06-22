/*MENU DESPLEGABLE -----------------------*/

const navToggle = document.querySelector(".header_nav_toggle");
const navMenu = document.querySelector(".nav_lista_secciones_sitio");

navToggle.addEventListener("click", desplegar_menu);

function desplegar_menu(){

  navMenu.classList.toggle("nav_lista_secciones_sitio_visible");
  
}

