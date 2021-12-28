const container_form = document.getElementById('container_form');
const inputs =document.querySelectorAll('#container_form input');

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


container_form.addEventListener('submit', (e) => {
	e.preventDefault();
	if(fields.password && fields.email){
		container_form.reset();
        document.getElementById('form_mesage').style.display='none';
        /*document.getElementById('form_mesage_ok').style.display='block';*/
        console.log("Todo ok");
        window.location="index.html";
	} else {
        console.log("Todo Algo anda mal");
		document.getElementById('form_mesage').style.display='block';
        /*document.getElementById('form_mesage_ok').style.display='none';*/
	}
});