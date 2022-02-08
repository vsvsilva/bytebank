import { Cliente } from "./Cliente.js"
import { ContaCorrente } from "./ContaCorrente.js"

const cliente1 = new Cliente("Ricardo", 11122233309)
const contaCorrenteRicardo = new ContaCorrente(1001, cliente1)

const cliente2 = new Cliente("Alice", 12345678909)
const contaCorrenteAlice = new ContaCorrente(1001, cliente2)

contaCorrenteRicardo.depositar(500)
contaCorrenteRicardo.transferir(250, contaCorrenteAlice)

//console.log(contaCorrenteRicardo)
//console.log(contaCorrenteAlice)

console.log(ContaCorrente.numeroDeContas)