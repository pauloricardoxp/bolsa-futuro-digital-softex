document.addEventListener("DOMContentLoaded", () => {
    let notasAluno = [
        [7, 8, 6],
        [9, 5, 8],
        [6, 7, 7],
        [4, 5, 6]
    ];

    const tabela = document.getElementById("tabela");

    for (let i = 0; i < notasAluno.length; i++) {
        let linha = document.createElement("tr");

        // Nome do aluno
        let calNome = document.createElement("td");
        calNome.textContent = `Aluno ${i + 1}`;
        linha.appendChild(calNome);

        // Notas e soma
        let soma = 0;
        for (let j = 0; j < notasAluno[i].length; j++) {
            let calNota = document.createElement("td");
            calNota.textContent = notasAluno[i][j];
            linha.appendChild(calNota);
            soma += notasAluno[i][j];
        }

        // Média
        let media = soma / notasAluno[i].length;
        let calMedia = document.createElement("td");
        calMedia.textContent = media.toFixed(2);
        linha.appendChild(calMedia);

        // Situação
        let situacao = document.createElement("td");
        if (media >= 7) {
            situacao.textContent = "Aprovado";
            situacao.className = "aprovado";
        } else {
            situacao.textContent = "Reprovado";
            situacao.className = "reprovado";
        }
        linha.appendChild(situacao);

        // Adiciona a linha na tabela
        tabela.appendChild(linha);
    }
});
