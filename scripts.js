const formulario = document.querySelector(".formulario")
const mascaraForm = document.querySelector(".mascara-formulario")

function mostrarFormulario() {
    
    mostrarMascaraForm()
    formulario.style.left = "40%"
    formulario.style.transform = "translateX(-17%)"
}

function mostrarMascaraForm(){
    mascaraForm.style.position = "fixed"
    mascaraForm.style.top = "0"
    mascaraForm.style.width = "100%"
    mascaraForm.style.height = "100%"
    mascaraForm.style.background = `linear-gradient(109deg, 
                                    rgba(10, 12, 16, 0.99) 15%,
                                    rgba(10, 12, 16, 0.7) 50%,
                                    rgba(10, 12, 16, 0.99) 85%)`
    mascaraForm.style.visibility = "visible"
}

function esconderFormulario(){
    formulario.style.left = "-340px"
    formulario.style.transform = "translateX(0)"
    mascaraForm.style.visibility = "hidden"
    mascaraForm.style.transition = "visibility 0.5s ease-in-out"
}
