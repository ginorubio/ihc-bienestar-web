const email= document.getElementById("email");
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")
let Usuarios= ["jonatan@unmsm.edu.pe", "gino@unmsm.edu.pe","alex@unmsm.edu.pe"]


form.addEventListener("submit", (e)=>{
    e.preventDefault()
    let warnings=""
    let entrar= false
    let regexEmail= /\w+@+[u]+[n]+[m]+[s]+[m]\.+[e]+[d]+[u]\.+[p]+[e]/

    // console.log(regexEmail.test(email.value))
    if(!regexEmail.test(email.value) || Usuarios.includes(email.value)==false){
        warnings += '(*) El correo no es válido <br> '
        entrar=true
    }
    if(regexEmail.test(email.value) &&  Usuarios.includes(email.value)==true ){
        warnings += '<br> '
        entrar=true
        window.location='confirm.html'
        
    }
    if(entrar){
        parrafo.innerHTML=warnings
    }



});

