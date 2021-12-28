const form_2 = document.getElementById("form_2");
const codigo = document.getElementById("code");
const parrafo = document.getElementById("warnings")


form_2.addEventListener("submit", (e) => {
    e.preventDefault();
    let warnings = "";
    let entrar = false;
    let regexCode =/[5]+[5]+[5]+[5]/

    if (!regexCode.test(codigo.value)) {
        warnings +=
            "(*) El codigo introducido no es correcto, verifique <br> ";
        entrar = true;
    }
    if (regexCode.test(codigo.value)) {
        warnings += "<br> ";
        entrar = true;
        window.location = "change.html";
    }

    if (entrar) {
        parrafo.innerHTML = warnings
    }

});