import { Cliente } from "./Cliente.js"
import { Gerente } from "./Funcionarios/Gerente.js"
import { Diretor } from "./Funcionarios/Diretor.js"
import { SistemaAutenticacao } from "./SistemaAutenticacao.js"

const diretor = new Diretor("Rodrigo", 10000, 12345687909)
diretor.cadastrarSenha("123456")

const gerente = new Gerente("Ricardo", 5000, 12365498700)

const estaLogado = SistemaAutenticacao.login(diretor, "123456")

console.log(estaLogado)