const container_form = document.getElementById('container_form');
const inputs =document.querySelectorAll('#container_form input');
const registrar=document.getElementById('registrar');
const expressions={
    password: /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
    email:/\w+@+[u]+[n]+[m]+[s]+[m]\.+[e]+[d]+[u]\.+[p]+[e]/,
}
const fields={
    password: false,
    email:false,
}
const validation_form=(e)=>{
    switch (e.target.name) {
        case "email":
            validation_field(expressions.email, e.target, 'email');
            break;
        case "password":
            validation_field(expressions.password, e.target, 'password');
            break;
    }
}
const validation_field = (expression, input, field) => {
	if(expression.test(input.value)){
		fields[field] = true;
	} else {
		fields[field] = false;
    }
}
inputs.forEach((input) => {
	input.addEventListener('keyup', validation_form);
	input.addEventListener('blur', validation_form);
});



registrar.addEventListener('click',(e)=>{
    window.location="register_user.html";
});

container_form.addEventListener('submit', (e) => {
    email=document.getElementById('email');
    pass=document.getElementById('password');
	e.preventDefault();
	if(fields.password && fields.email){
		
        document.getElementById('form_mesage').style.display='none';
        if(email.value==='rosa@unmsm.edu.pe'){
            
            window.location='menu.html';
        }else{
            window.location='home.html';
        }
        container_form.reset();
	} else {
		document.getElementById('form_mesage').style.display='block';
	}
    
});

