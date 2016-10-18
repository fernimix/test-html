/* Activación del slider */
$(document).ready(function() {
  $('.slider').slick({
    autoplay: true,
    autoplaySpeed: 3000,
  });
});

/* Acordeón */
// Configuramos la librería jQuery Accordion
$('.accordion').accordion({
  transitionSpeed: 400,        // velocidad del acordeón
  transitionEasing: 'ease'    // ritmo del acordeón (linear, ease-in…)
});

/* Mensaje en pantalla */
// Configuramos la librería Ouibounce
ouibounce(document.getElementById('modal-card'), {
  aggressive: true,            // borra la cookie viewedOuibounceModal
  timer: 5                        // espera (evita falsos positivos)
});