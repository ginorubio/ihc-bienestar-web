const form_3 = document.getElementById("form_change");
const password_1 = document.getElementById("password");
const password_2 = document.getElementById("password_repeat");
const parrafo = document.getElementById("warnings")
console.log("eeeee");

form_3.addEventListener("submit", (e) => {
    e.preventDefault();
    let warnings = "";
    let entrar = false;
    let regexPassword =
        /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;

    if (password_1.value == password_2.value) {
        if (!regexPassword.test(password_1.value)) {
            warnings +=
                "La contraseña debe de ser de 8 caracteres, tener al menos una Mayuscula, un numero y un carater epecial <br> ";
            entrar = true;
        }
        if (regexPassword.test(password_1.value)) {
            warnings += "<br> ";
            entrar = true;
            window.location = "login.html";
        }
    } else {
        warnings +=
        "(*) Las contraseñas deben ser iguales <br> ";
        entrar = true;
    }
    if(entrar){
        parrafo.innerHTML=warnings
    }

});
