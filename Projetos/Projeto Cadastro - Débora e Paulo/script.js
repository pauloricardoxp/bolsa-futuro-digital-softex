function calcularMedia(nota1, nota2, nota3) {
    return ((nota1 + nota2 + nota3) / 3).toFixed(2);
}

function tabela() {
    const tabela = document.getElementById("tabela");

    const aluno = document.getElementById("aluno").value;
    const nota1 = Number(document.getElementById("nota1").value);
    const nota2 = Number(document.getElementById("nota2").value);
    const nota3 = Number(document.getElementById("nota3").value);

    if (
    nota1 < 0 || nota1 > 10 ||
    nota2 < 0 || nota2 > 10 ||
    nota3 < 0 || nota3 > 10
    ) {
    alert("As notas devem estar entre 0 e 10!");
    return;
}


    if (aluno == "") {
        alert("[ERRO] Digite o nome do aluno!");
        return;
    }

    let media = calcularMedia(nota1, nota2, nota3);

    
    let cabecalho = tabela.querySelector("thead");
    if (!cabecalho) {
        cabecalho = document.createElement("thead");
        cabecalho.innerHTML = `
            <tr>
                <th>Aluno</th>
                <th>Notas</th>
                <th>Média</th>
                <th>Situação</th>
            </tr>
        `;
        tabela.appendChild(cabecalho);
    }

    
    let corpoTabela = tabela.querySelector("tbody");
    if (!corpoTabela) {
        corpoTabela = document.createElement("tbody");
        tabela.appendChild(corpoTabela);
    }

    
    const linha = document.createElement("tr");

    const colunaNome = document.createElement("td");
    colunaNome.textContent = aluno;
    linha.appendChild(colunaNome);

    const colunaNotas = document.createElement("td");
    colunaNotas.textContent = `${nota1}, ${nota2}, ${nota3}`;
    linha.appendChild(colunaNotas);

    const colunaMedia = document.createElement("td");
    colunaMedia.textContent = media;
    linha.appendChild(colunaMedia);

    const colunaSituacao = document.createElement("td");
    if (media >= 7) {
        colunaSituacao.textContent = "Aprovado";
        colunaSituacao.className = "aprov";
    } else if (media >= 5) {
        colunaSituacao.textContent = "Recuperação";
        colunaSituacao.className = "recup";
    } else {
        colunaSituacao.textContent = "Reprovado";
        colunaSituacao.className = "repro";
    }
    linha.appendChild(colunaSituacao);

    corpoTabela.appendChild(linha);
}
