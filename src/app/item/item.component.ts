import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  @Input() item: any;
  @Output() editar = new EventEmitter<string>();
  @Output() marcar = new EventEmitter<void>();
  @Output() excluir = new EventEmitter<void>();

  editarItem(novoNome: string): void {
    this.editar.emit(novoNome);
  }

  marcarItem(): void {
    this.marcar.emit();
  }

  excluirItem(): void {
    this.excluir.emit();
  }
}
