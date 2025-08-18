document.addEventListener("DOMContentLoaded", () =>{
    const btn = document.getElementById("btnVerificar")
    const resultado = document.getElementById("resultado")

    btn.addEventListener("click", () =>{
        let idade = Number(document.getElementById("idade").value);
        let temCnh = document.getElementById("cnh").checked

        if(idade >= 18 && temCnh){
            resultado.textContent = "Pode dirigir"
            resultado.className = "verde"
        }
        else{
            resultado.textContent = "Não pode dirigir"
            resultado.className = "vermelho"
        }
    })
})