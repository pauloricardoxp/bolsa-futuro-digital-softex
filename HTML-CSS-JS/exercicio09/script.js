document.addEventListener("DOMContentLoaded", () =>{
    const btn = document.getElementById("btnComparar")
    const maiorNum = document.getElementById("maior")
    const menorNum = document.getElementById("menor")
    const igualNum = document.getElementById("iguais")

    btn.addEventListener("click", () =>{
        let num1 = Number(document.getElementById("num1").value)
        let num2 = Number(document.getElementById("num2").value)
        let num3 = Number(document.getElementById("num3").value)

        if(isNaN(num1) || isNaN(num2)|| isNaN(num3)){
            alert("ERRO[Digite um número válido!!]")
            return;
        }
            let maior = Math.max(num1,num2,num3);
            let menor = Math.min(num1,num2,num3);
            maiorNum.innerHTML = `Maior número: <span class="negrito">${maior}</span>`;
            menorNum.innerHTML = `Menor número: <span class="negrito">${menor}</span>`;

            if(num1 == num2 && num2 == num3){
                igualNum.textContent="Todos os números são iguais"
            }
            else if(num1 == num2 || num1 == num3 || num2 == num3){
                igualNum.textContent="Existem números iguais"
            }
            else{
                igualNum.textContent="Todos os números são diferentes"
            }
            
    })
})