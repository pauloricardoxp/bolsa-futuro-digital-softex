document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("btnCalcular")

    const resultado = document.getElementById("resposta")

    function gerarTabuada(){
        let num = Number(document.getElementById("num").value)

        if(isNaN(num)){
            alert("ERRO Digite um número válido!")
            return
        }

        for(let i = 1; i<=10;i++){
            let calcular = num * i
            resultado.innerHTML += `${num} x ${i} = ${calcular} <br>`
        }
    }

    btn.addEventListener("click", gerarTabuada)
})