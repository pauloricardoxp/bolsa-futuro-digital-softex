class ContaBancaria{
    #saldo = 0;

    depositar(valor){
        return this.#saldo += valor;
    }

    sacar(valor){
        if(this.#saldo >= valor){
            return this.#saldo -= valor;
        }
        else{
            return `Saldo Insuficiente`
        }
    }

    verSaldo(){
        return `Saldo Atual : ${this.#saldo}`
    }
}

const valor = new  ContaBancaria()

console.log(valor.depositar(100));
console.log(valor.sacar(30));
console.log(valor.verSaldo());
