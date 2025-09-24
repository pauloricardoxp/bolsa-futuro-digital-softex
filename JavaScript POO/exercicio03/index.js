class Retangulo{
    constructor(largura,altura){
        this.largura = largura;
        this.altura = altura;
    }

    area(){
        return this.largura * this.altura;
    }

    perimetro(){
        return 2 * (this.largura + this.altura);
    }
}

const prompt = require('prompt-sync')();
let largura = Number(prompt("Digite a largura do retangulo: "));
let altura = Number(prompt("Digite a altura do retangulo: "));

const retangulo = new Retangulo(largura,altura)
console.log(retangulo.area());
console.log(retangulo.perimetro())