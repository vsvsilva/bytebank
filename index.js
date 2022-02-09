import { Cliente } from "./Cliente.js"
import { ContaCorrente } from "./ContaCorrente.js"
import { ContaPoupanca } from "./ContaPoupanca.js"
import { ContaSalario } from "./ContaSalario.js"

const cliente1 = new Cliente("Ricardo", 11122233309)
const contaCorrenteRicardo = new ContaCorrente(1001, cliente1)

contaCorrenteRicardo.depositar(500)

const contaPoupanca = new ContaPoupanca(50, cliente1, 1001)

console.log(contaPoupanca)