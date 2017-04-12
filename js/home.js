
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

/*function extenderRegistro() {
	var registro = document.getElementById('registro'); 
	var iniciar = document.getElementById('iniciar');
	var forminiciar = document.getElementById('forminiciar');

	// eliminar clase  
registro.classList.remove('m6');

	// eliminar clase  
iniciar.classList.remove('m6'); 	 	 

forminiciar.classList.add('hide');
	// agregar clase  
registro.classList.add('m8');
 
 	// agregar clase  
iniciar.classList.add('m4'); 

iniciar.classList.add('logofondo'); 



}*/



function registro() {
	var registro =  document.getElementById('form');
	registro.innerHTML = 
				"<form id='formRegistro' class='animated fadeIn' name='' method='POST' action=''>"+
				"<h5 class='grey-text col s12' >Registrate</h5>"+
				"<input type='text' name='' placeholder='Nombre' required='required'>"+
				"<input type='text' name='' placeholder='Apellido Paterno' >"+
				"<input type='date' name='' placeholder='Apellido Materno'>"+
				"<p class='grey-text'>Género:</p>"+
				"<input name='genero' type='radio' id='masculino' />"+
      			"<label for='masculino'>Masculino</label>"+
      			"<input name='genero' type='radio' id='femenino' />"+
      			"<label for='femenino'>Femeino</label>"+
				"<input type='email' placeholder='Correo electronico' required='required'>"+
				"<input type='number' placeholder='Teléfono:' required='required'>"+
				"<p>"+
					"<input type='checkbox' id='aceptar'>"+
					"<label for='aceptar'>Acepto los <a href='terminos.html'>términos </a> y <a href='aviso.html'>aviso de privacidad</a></label>"+
				"</p>"+
				"<input type='submit' name='' value='Registrame' class='btn'><br><br>"+
				"<span onclick='return login();'>¿Ya tienes una cuenta? <a href='#'>Iniciar sesión</a></span>"+
			"</form>";
}

	function login() {
	var  login =  document.getElementById('form');
	 login.innerHTML = 					
				"<form name='' method='POST' action='' class='animated fadeIn' id='formLogin'>"+
					"<h5 class='grey-text col s12' >¡Bienvenido!</h5>"+
					"<br>"+
						"<input type='email' name='' placeholder='Correo' required='required'>"+
						"<input type='password' name='' placeholder='Contraseña' required='required'>"+
						"<input type='submit' name='' class='btn animated bounceIn right'>"+
						"<br><br><br><br>"+
						"<center><span onclick='registro();'>¿No tienes cuenta? <a href='#'> Registrate</a></span></center>"+
						"<br>"+
						"<center><span><a href=''>Recuperar contraseña</a></span></center>"+
				"</form>";
}

// optener años para el footer

var fecha = new Date();
var ano = fecha.getFullYear();