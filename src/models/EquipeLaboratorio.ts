export class EquipeLaboratorio {
  private bancada: string;
  private numeroMembros: number;

  constructor(bancada: string, numeroMembros: number) {
    this.bancada = bancada;
    this.numeroMembros = numeroMembros;
  }

 
  getBancada(): string {
    return this.bancada;
  }

  getNumeroMembros(): number {
    return this.numeroMembros;
  }

  setBancada(novaBancada: string): void {
    if (novaBancada.trim() === "") {
      console.log("\nA bancada nao pode ser vazia");
      return;
    }
    this.bancada = novaBancada;
    console.log("\nBancada registrada com sucesso!");
  }

  setNumeroMembros(novoNumero: number): void {
    if (novoNumero < 0) {
      console.log("\nO numero de membros nao pode ser menor que 0");
      return;
    }
    this.numeroMembros = novoNumero;
    console.log("\nNumero de membros registrado com sucesso!");
  }

  relatorio(): void {
    console.log(`Bancada: ${this.bancada}`);
  }
}