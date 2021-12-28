const form = document.getElementById('form_activity');
const inputs = document.querySelectorAll('#form_activity input, #modality, #type, #rules, #description');

const expresiones = {
	nombre: /^[1-9a-zA-ZÀ-ÿ\s]{1,50}$/, // Letras y espacios, pueden llevar acentos.
	organizador: /^[a-zA-ZÀ-ÿ\s]{1,50}$/,
	descripcion: /^[1-9a-zA-ZÀ-ÿ\s]{1,200}$/, // Letras y espacios, pueden llevar acentos.
    reglas: /^[1-9a-zA-ZÀ-ÿ\s]{1,200}$/, // Letras y espacios, pueden llevar acentos.
}

const fields = {
	nombre: false,
	organizador: false,
	modalidad: false,
	tipo: false,
	fInicio: false,
	fFin: false,
	descripcion: false,
	reglas: false
}

const validateForm = (e) =>{
	switch (e.target.name) {
		case "nombre":
			textValidate(expresiones.nombre, e.target, 'nombre');
		break;
		case "organizador":
			textValidate(expresiones.organizador, e.target, 'organizador');
		break;
		case "tipo":
			selectValidate(e.target,'tipo');
		break;
		case "modalidad":
			selectValidate(e.target,'modalidad');
		break;
		
		case "fInicio":
			dateValidate(e.target,'fInicio');
		break;
		case "fFin":
			dateValidate(e.target,'fFin');
		break;
		case "descripcion":
			textValidate(expresiones.descripcion, e.target, 'descripcion');
		break;
		case "reglas":
			textValidate(expresiones.reglas, e.target, 'reglas');
		break;
	}
}

const textValidate = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		changeValidate(true, campo);
	} else {
		changeValidate(false, campo);
	}
}

const selectValidate = (input, campo) => {
	if(input.value !=0){
		changeValidate(true, campo);
	} else {
		changeValidate(false, campo);
	}
}

const dateValidate = (input, campo) => {
	var inicio = document.getElementById('start_date');
	var fin = document.getElementById('end_date');
	var date = new Date();
	var hoy = date.toISOString().split('T')[0]

	if(input.name == "fInicio" ){
		if(inicio.value > hoy){
			changeValidate(true, campo);
		} else {
			changeValidate(false, campo);
		}
	}
	if(input.name == "fFin" ){
		if(fin.value > inicio.value){
			changeValidate(true, campo);
		} else {
			changeValidate(false, campo);
		}
	}
}

const changeValidate = (valid, campo) => {
	if(valid){
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
		if(campo=='nombre' || campo == 'organizador'){
			document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
			document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
		}
		fields[campo] = true;
	} else {
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
		if(campo=='nombre' || campo == 'organizador'){
			document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
			document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
		}
		fields[campo] = false;
	}
}

inputs.forEach((input) => {
	input.addEventListener('keyup', validateForm);
	input.addEventListener('blur', validateForm);
	input.addEventListener('change', validateForm);
})

form.addEventListener('submit', (e) => {
	e.preventDefault();
	//validacion del registro
	if(fields.nombre && fields.organizador && fields.tipo && fields.modalidad && fields.fInicio
		&& fields.fFin && fields.reglas && fields.descripcion){

		form.reset();

		document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
		setTimeout(() => {
			document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
		}, 5000);

		document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
			icono.classList.remove('formulario__grupo-correcto');
		});
		document.getElementById('formulario__mensaje').classList.remove('formulario__mensaje-activo');
		document.getElementById('espacio').classList.remove('formulario__mensaje-activo');
	} else {
		document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
		document.getElementById('espacio').classList.add('formulario__mensaje-activo');
	}
})


