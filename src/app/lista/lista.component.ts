import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  itens: any[] = [];

  constructor(private itemService: ItemService) {}

  ngOnInit(): void {
    this.itens = this.itemService.getItens();
  }

  adicionarItem(nome: string): void {
    this.itemService.adicionarItem(nome);
  }

  editarItem(index: number, novoNome: string): void {
    this.itemService.editarItem(index, novoNome);
  }

  marcarComoComprado(index: number): void {
    this.itemService.marcarComoComprado(index);
  }

  excluirItem(index: number): void {
    this.itemService.excluirItem(index);
  }

  getItensComprados(): any[] {
    return this.itens.filter(item => item.comprado);
  }

  getItensNaoComprados(): any[] {
    return this.itens.filter(item => !item.comprado);
  }
}
