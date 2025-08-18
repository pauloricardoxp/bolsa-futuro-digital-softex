document.addEventListener("DOMContentLoaded" , () =>{
    const btn = document.getElementById("btnCalcular")
    const resultado = document.getElementById("resultado")

    btn.addEventListener("click", () => {
        let nota1 = Number(document.getElementById("nota1").value);
        let nota2 = Number(document.getElementById("nota2").value);
        let nota3 = Number(document.getElementById("nota3").value);

        if(isNaN(nota1) || isNaN(nota2) || isNaN(nota3)){
            nota1 < 0 || nota1 >10
            nota2 < 0 || nota2 >10
            nota3 < 0 || nota3 >10
        }{
            alert("Digite notas válida")
            return;
        }

        const media = document.getElementById("media").textContent = ((nota1 + nota2 + nota3) / 3).toFixed(2);

        if(media >= 7){
            resultado.textContent = "Aprovado"
        }
        else if(media >= 5){
            resultado.textContent = "Recuperação"
        }
        else{
            resultado.textContent = "Reprovado"
        }
    })
})