const container_form = document.getElementById('container_form');
const inputs =document.querySelectorAll('#container_form input');

const expressions={
    first_name:/^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    last_name:/^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    password: /^.{8,20}$/,
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
    user:false
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
            validation_confirm_pass();
            break;  
        case "confirm_pass":
            validation_confirm_pass();
            break;
    }
}

const validation_field = (expression, input, field) => {
	if(expression.test(input.value)){

		document.querySelector(`#group_${field} i`).classList.remove('fa-times-circle');	
        document.querySelector(`#group_${field} i`).classList.add('fa-check-circle');	
		fields[field] = true;

	} else {
		document.querySelector(`#group_${field} i`).classList.add('fa-times-circle');
		document.querySelector(`#group_${field} i`).classList.remove('fa-check-circle');
		fields[field] = false;
	
    }
}
const validation_confirm_pass = () => {
    const pass=document.getElementById("password").value;
    const confirm_pass=document.getElementById("confirm_pass").value;
	if(pass!=confirm_pass){
        document.querySelector(`#group_confirm_pass i`).classList.remove('fa-check-circle');
		document.querySelector(`#group_confirm_pass i`).classList.add('fa-times-circle');
		
		fields['password'] = false;

	} else {
        document.querySelector(`#group_confirm_pass i`).classList.remove('fa-times-circle');
		document.querySelector(`#group_confirm_pass i`).classList.add('fa-check-circle');
		
		fields['password'] = true;
	
    }
}
inputs.forEach((input) => {
	input.addEventListener('keyup', validation_form);
	input.addEventListener('blur', validation_form);
});

container_form.addEventListener('submit', (e) => {
	e.preventDefault();

	const term = document.getElementById('cbox_term');
	if(fields.code && fields.last_name && fields.user && fields.first_name && fields.password && fields.email && fields.cellphone && term.checked ){
		container_form.reset();
        document.getElementById('form_mesage').style.display='none';
        document.getElementById('form_mesage_ok').style.display='block';
        console.log("Todo ok");
        window.location="index.html";
	} else {
        console.log("Todo Algo anda mal");
		document.getElementById('form_mesage').style.display='block';
        document.getElementById('form_mesage_ok').style.display='none';
	}
});