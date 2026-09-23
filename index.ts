import  readline from "readline-sync";
import { RelatorioCenso } from "./src/models/RelatorioCenso";

const objCenso = new RelatorioCenso(129458, 30);

// Chamada dos métodos getter com ()
console.log(objCenso.getCodigoInstituicao());
console.log(objCenso.getTotalAlunos());

// Chamada dos métodos setter como funções com argumentos
objCenso.setCodigoInstituicao(
  readline.questionFloat("Digite o novo codigo de instituicao: ")
);

objCenso.setTotalAlunos(
  readline.questionFloat("Digite o novo numero total de alunos: ")
);

objCenso.relatorio();