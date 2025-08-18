document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("btnComparar")
    const maiorNum = document.getElementById("maior")
    const menorNum = document.getElementById("menor")
    const igualNum = document.getElementById("igual")

    btn.addEventListener("click", () => {
        let num1 = Number(document.getElementById("num1").value)

        let num2 = Number(document.getElementById("num2").value);

        if(isNaN(num1) || isNaN(num2)){
            alert("Digite números válidos")
            return;
        }
        
        if(num1 > num2){
            maiorNum.innerHTML = `O maior número: <span class="negrito">${num1}</span>` ;
            menorNum.innerHTML = `O menor número: ${num2}`;
            igualNum.innerHTML = "";
        }
        else if( num2 > num1){
            maiorNum.innerHTML = `O maior número: <span class="negrito">${num2}</span>`;
            menorNum.innerHTML = `O menor número:${num1}`;
            igualNum.innerHTML = "";
        }
        else{
            maiorNum.innerHTML = "";
            menorNum.innerHTML = "";
            igualNum.innerHTML = "Os dois números são iguais."
        }

    })
})