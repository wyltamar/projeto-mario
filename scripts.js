const formulario = document.querySelector(".formulario")
const mascaraForm = document.querySelector(".mascara-formulario")

function mostrarFormulario() {
    
    mostrarMascaraForm()
    formulario.style.left = "40%"
    formulario.style.transform = "translateX(-15%)"
}

function mostrarMascaraForm(){
    mascaraForm.style.visibility = "visible"
}

function esconderFormulario(){
    formulario.style.left = "-340px"
    formulario.style.transform = "translateX(0)"
    mascaraForm.style.visibility = "hidden"
    mascaraForm.style.transition = "visibility 0.5s ease-in-out"
}
