function saudacao(nome){
    return `Olá, ${nome} seja bem-vindo(a)`
}




document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("btnSaudar")
    const input = document.getElementById("name")
    const resultado = document.getElementById("saudacao")

    btn.addEventListener("click", () =>{
        let nome = input.value
        resultado.textContent= `${saudacao(nome)}`

    })
})