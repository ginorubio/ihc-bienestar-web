const form_3 = document.getElementById('form_change');
const inputs = document.querySelectorAll('#form_change input');

const expresiones = {
		password: /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/

}

const campos = {
	 password: false,
	
}
let bandera1 = false;
let bandera2 = false;

const validarFormulario = (e) => {
	switch (e.target.name) {
		
		case "password1":
			validarCampo(expresiones.password, e.target, 'password');
			validarPassword2();
		break;
		case "password2":
			validarPassword2();
		break;
		
	}
}

const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		const aviso=document.getElementById("aviso")
        let a ="";
        aviso.innerHTML=a;
        bandera1=true;
        		
	} else {
        const aviso=document.getElementById("aviso")
        let a ="(*)La contraseña debe de ser de 8 caracteres, tener al menos una Mayuscula, un numero y un carater epecial <br> ";
        aviso.innerHTML=a;
	}
}

const validarPassword2 = () => {
	const inputPassword1 = document.getElementById('password');
	const inputPassword2 = document.getElementById('password_repeat');

	if(inputPassword1.value !== inputPassword2.value){
		const warnings =document.getElementById("warnings")
        let a ="La contraseña debe de ser iguales <br> ";
        warnings.innerHTML=a;

	} else {
        const warnings=document.getElementById("warnings")
        let a ="";
        warnings.innerHTML=a;
        bandera2=true
		
	}
}

inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

form_3.addEventListener('submit', (e) => {
	e.preventDefault();
    if(bandera2 && bandera1==true){
        window.location = "login.html";
        
    }
    
});