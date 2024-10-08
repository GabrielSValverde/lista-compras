import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private itens: any[] = [];

  getItens(): any[] {
    return this.itens;
  }

  adicionarItem(nome: string): void {
    const novoItem = { nome, comprado: false };
    this.itens.push(novoItem);
  }

  editarItem(index: number, novoNome: string): void {
    if (this.itens[index]) {
      this.itens[index].nome = novoNome;
    }
  }

  marcarComoComprado(index: number): void {
    if (this.itens[index]) {
      this.itens[index].comprado = !this.itens[index].comprado;
    }
  }

  excluirItem(index: number): void {
    if (this.itens[index]) {
      this.itens.splice(index, 1);
    }
  }
}
