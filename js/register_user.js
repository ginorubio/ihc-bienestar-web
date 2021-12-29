const container_form = document.getElementById('container_form');
const inputs =document.querySelectorAll('#container_form input');

const expressions={
    first_name:/^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    last_name:/^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    password: /^.{8,20}$/,
    confirm_pass: /^.{8,20}$/,
    email:/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    cellphone: /^\d{9,9}$/,
    code: /^\d{8,8}$/,
    user:/^[a-zA-Z0-9\_\-]{4,16}$/
}

const fields={
    first_name:false,
    last_name: false,
    password: false,
    email:false,
    cellphone: false,
    code: false,
    user:false,
    eap:false,
    confirm_pass:false
}

const validation_form=(e)=>{
    switch (e.target.name) {
        case "code":
            validation_field(expressions.code, e.target, 'code');
            break;
        case "first_name":
            validation_field(expressions.first_name, e.target, 'first_name');
            break;
        case "last_name":
            validation_field(expressions.last_name, e.target, 'last_name');
            break;
        case "email":
            validation_field(expressions.email, e.target, 'email');
            break;
        case "cellphone":
            validation_field(expressions.cellphone, e.target, 'cellphone');
            break;
        case "user":
            validation_field(expressions.user, e.target, 'user');
            break;
        case "password":
            validation_field(expressions.password, e.target, 'password');
            
            break;  
        case "confirm_pass":
            validation_field(expressions.password, e.target, 'confirm_pass');
            validation_confirm_pass();
            break;
        case "eap":
            validation_eap(e.target, 'eap');
            break;
    }
}

const validation_field = (expression, input, field) => {
	if(expression.test(input.value)){

		document.querySelector(`#group_${field} i`).classList.remove('fa-times-circle');
        document.querySelector(`#group_${field} i`).classList.remove('form_validation_state_fail');
        document.querySelector(`#group_${field} i`).classList.add('fa-check-circle');	
        document.querySelector(`#group_${field} i`).classList.add('form_validation_state_ok');	
        document.querySelector(`#group_${field} label`).classList.remove('field_label_error');
        document.querySelector(`#group_${field} input`).classList.remove('field_input_error');
        document.querySelector(`#group_${field} p`).style.display='none';
		fields[field] = true;

	} else {
        document.querySelector(`#group_${field} i`).classList.remove('fa-check-circle');
        document.querySelector(`#group_${field} i`).classList.remove('form_validation_state_ok');	
		document.querySelector(`#group_${field} i`).classList.add('fa-times-circle');
        document.querySelector(`#group_${field} i`).classList.add('form_validation_state_fail');
        document.querySelector(`#group_${field} p`).style.display='block';
        document.querySelector(`#group_${field} label`).classList.add('field_label_error');
        document.querySelector(`#group_${field} input`).classList.add('field_input_error');
		fields[field] = false;
	
    }
}
const validation_confirm_pass = () => {
    const pass=document.getElementById("password").value;
    const confirm_pass=document.getElementById("confirm_pass").value;
    console.log(pass)
	if(pass!=confirm_pass || confirm_pass==""){
        
        document.querySelector(`#group_confirm_pass i`).classList.remove('fa-check-circle');
        document.querySelector(`#group_confirm_pass  i`).classList.remove('form_validation_state_ok');	
        document.querySelector(`#group_confirm_pass i`).classList.add('form_validation_state_fail');	
		document.querySelector(`#group_confirm_pass i`).classList.add('fa-times-circle');
		document.querySelector(`#group_confirm_pass p`).style.display='block';
		fields['password'] = false;

	} else {
        document.querySelector(`#group_confirm_pass i`).classList.remove('fa-times-circle');
        document.querySelector(`#group_confirm_pass i`).classList.remove('form_validation_state_fail');
		document.querySelector(`#group_confirm_pass i`).classList.add('fa-check-circle');
        document.querySelector(`#group_confirm_pass i`).classList.add('form_validation_state_ok');	
		document.querySelector(`#group_confirm_pass p`).style.display='none';
		fields['password'] = true;
	
    }
}
const validation_eap = (input,field) => {
    console.log("holaaa");
	if(input.value!=0){
        document.querySelector(`#group_${field}  i`).classList.remove('fa-times-circle');
        document.querySelector(`#group_${field}  i`).classList.remove('form_validation_state_fail');
		document.querySelector(`#group_${field}  i`).classList.add('fa-check-circle');
        document.querySelector(`#group_${field}  i`).classList.add('form_validation_state_ok');	
		document.querySelector(`#group_${field}  p`).style.display='none';
		fields[field] = true;

	} else {
        document.querySelector(`#group_${field}  i`).classList.remove('fa-check-circle');
        document.querySelector(`#group_${field}  i`).classList.remove('form_validation_state_ok');	
        document.querySelector(`#group_${field}  i`).classList.add('form_validation_state_fail');	
		document.querySelector(`#group_${field}  i`).classList.add('fa-times-circle');
		document.querySelector(`#group_${field}  p`).style.display='block';
		fields[field] = false;

	
    }
}
inputs.forEach((input) => {
	input.addEventListener('keyup', validation_form);
	input.addEventListener('blur', validation_form);
    input.addEventListener('change', validation_form);
});

function cancelar(){
    window.location="index.html";
}
container_form.addEventListener('submit', (e) => {
	e.preventDefault();

	const term = document.getElementById('cbox_term');
	if(fields.code && fields.last_name && fields.user && fields.first_name && fields.password && fields.email && fields.cellphone && term.checked ){
		container_form.reset();
        document.getElementById('form_mesage').style.display='none';
        document.getElementById('form_mesage_ok').style.display='block';
        
        window.location="index.html";
	} else {
        
		document.getElementById('form_mesage').style.display='block';
        document.getElementById('form_mesage_ok').style.display='none';
	}
});

function error_general(){
    console.log("Todo Algo anda mal");
	document.getElementById('form_mesage').style.display='block';
    ocument.getElementById('form_mesage_ok').style.display='none';
}