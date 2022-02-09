export class Conta{
    constructor(saldoInicial, cliente, agencia){
        this._saldo = saldoInicial
        this._cliente = cliente
        this._agencia = agencia
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
        let taxa = 1
        return this.sacar(valor, taxa)
    }

    _sacar(valor, taxa){
        const valorSacado = taxa * valor
        if(this._saldo >= valorSacado){
            this._saldo -= valorSacado
            return valorSacado
        }

        return 0
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