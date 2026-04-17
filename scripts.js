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
}
