import { Cliente } from "./Cliente.js"

export class ContaCorrente{
    static numeroDeContas = 0
    agencia
    _cliente
    _saldo = 0

    constructor(agencia, cliente){
        this.agencia = agencia
        this.cliente = cliente
        ContaCorrente.numeroDeContas += 1
    }    

    set cliente(novoCliente){
        if(novoCliente instanceof Cliente)
            this._cliente = novoCliente
    }

    get cliente(){
        return this._cliente
    }

    get saldo(){
        return this._saldo
    }

    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor
            return valor
        }
    }

    depositar(valor){
        if(valor < 0) return
        this._saldo += valor
    }

    transferir(valor, contaDestino){
        const valorSacado = this.sacar(valor)
        contaDestino.depositar(valorSacado)
    }
}