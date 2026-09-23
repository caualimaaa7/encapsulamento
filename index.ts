import readline from "readline-sync";
import { EquipeLaboratorio } from "./src/models/EquipeLaboratorio";

const objEquipe = new EquipeLaboratorio("Bancada A", 5);

// Chamada dos métodos getter com ()
console.log(objEquipe.getBancada());
console.log(objEquipe.getNumeroMembros());

// Chamada dos métodos setter como funções com argumentos
objEquipe.setBancada(
  readline.question("Digite a nova bancada: ")
);

objEquipe.setNumeroMembros(
  readline.questionInt("Digite o novo numero de membros: ")
);

objEquipe.relatorio();