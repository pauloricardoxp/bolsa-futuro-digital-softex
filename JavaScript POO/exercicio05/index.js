class Funcionario{
    constructor(nome, salario){
        this.nome = nome;
        this.salario = salario;
    }

    descricao(){
        return `Funcionário: ${this.nome}, Salário: ${this.salario}`
    }
}

class Gerente extends Funcionario{
    constructor(nome,salario,departamento){
        super(nome,salario);
        this.departamento = departamento;
    }
    
    descricao(){
        return `Funcionário: ${this.nome}, Salário: ${this.salario}, Departamento: ${this.departamento}`
    }
}

const funcionario = new Funcionario("Paulo", 2000.00);
console.log(funcionario.descricao());

const gerente = new Gerente("Ricardo", 3500, "TI");
console.log(gerente.descricao());