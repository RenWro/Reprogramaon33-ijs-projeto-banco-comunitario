import { Cliente } from './cliente';

export abstract class ContaBancaria {
  constructor(
    public numero: number,
    public saldo: number,
    public cliente: Cliente
  ) {}

  depositar(valor: number): void {
    this.saldo += valor;
  }

  sacar(valor: number): void {
    if (valor <= this.saldo) {
      this.saldo -= valor;
    } else {
      console.log('Saldo insuficiente');
    }
  }

  transferir(destino: ContaBancaria, valor: number): void {
    if (valor <= this.saldo) {
      this.sacar(valor);
      destino.depositar(valor);
    } else {
      console.log('Saldo insuficiente');
    }
  }
}
