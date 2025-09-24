class Pessoa{
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }

    apresentar(){
        return `Olá!, meu nome é ${this.nome} e tenho ${this.idade} anos. `
    }
}

const pessoa = new Pessoa("Paulo", 18)
console.log(pessoa.apresentar());