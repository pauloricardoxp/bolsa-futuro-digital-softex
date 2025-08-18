document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("btnCalcular");

    btn.addEventListener("click", () => {
        let num1 = Number(document.getElementById("numero1").value);
        let num2 = Number(document.getElementById("numero2").value);

        if (isNaN(num1) || isNaN(num2)) {
            alert("Digite números válidos");
            return;
        }

        document.getElementById("soma").textContent = num1 + num2;
        document.getElementById("subtracao").textContent = num1 - num2;
        document.getElementById("multiplicacao").textContent = num1 * num2;
        document.getElementById("divisao").textContent = num2 !== 0 ? (num1 / num2).toFixed(2) : "Divisão por 0";
        document.getElementById("restodedivisao").textContent = num2 !== 0 ? num1 % num2 : "Não aplicável";
    });
});
