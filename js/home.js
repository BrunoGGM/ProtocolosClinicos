
function navEnElTop() {
	$(document).ready(function(){
		var altura = $('#nav').offset().top;
		
		$(window).on('scroll', function(){
			if ( $(window).scrollTop() > altura ){
				$('#nav').addClass('navbar-fixed');
			} else {
				$('#nav').removeClass('navbar-fixed');
			}
		});

		$(window).on('scroll', function(){
			if ( $(window).scrollTop() > altura ){
				$('nav').addClass('colorBarraTop');
			} else {
				$('nav').removeClass('colorBarraTop');
			}
		});
		
	});
}

//Login animacion

function extenderRegistro() {
	var registro = document.getElementById('registro'); 
	var iniciar = document.getElementById('iniciar');

	// eliminar clase  
registro.classList.remove('m6');

	// eliminar clase  
iniciar.classList.remove('m6'); 	 	 

	// agregar clase  
registro.classList.add('m8');   
 
 	// agregar clase  
iniciar.classList.add('m4');  



}

function regresarTamanoRegistro() {
	var registro = document.getElementById('registro'); 
	var iniciar = document.getElementById('iniciar'); 


	// eliminar clase  
registro.classList.remove('m8');

	// eliminar clase  
iniciar.classList.remove('m4'); 

	// agregar clase  
registro.classList.add('m6');   
 
 	// agregar clase  
iniciar.classList.add('m6');  




}

function extenderIniciar() {
	var registro = document.getElementById('registro'); 
	var iniciar = document.getElementById('iniciar');


	// eliminar clase  
registro.classList.remove('m6');

	// eliminar clase  
iniciar.classList.remove('m6'); 	 	 

	// agregar clase  
registro.classList.add('m4');   
 
 	// agregar clase  
iniciar.classList.add('m8'); 




}

function regresarTamanoIniciar() {
	var registro = document.getElementById('registro'); 
	var iniciar = document.getElementById('iniciar');


	// eliminar clase  
registro.classList.remove('m4');

	// eliminar clase  
iniciar.classList.remove('m8'); 

	// agregar clase  
registro.classList.add('m6');   
 
 	// agregar clase  
iniciar.classList.add('m6');  



}