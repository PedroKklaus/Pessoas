import { Component, EventEmitter, Output, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Livros } from '../livros';

@Component({
  selector: 'app-livrosdetails',
  templateUrl: './livrosdetails.component.html',
  styleUrls: ['./livrosdetails.component.scss']
})
export class LivrosdetailsComponent {

  roteador = inject(ActivatedRoute);
  livro: Livros = new Livros();

  @Output() retorno = new EventEmitter<Livros>();


  salvar() {
    this.retorno.emit(this.livro);
  }
}
