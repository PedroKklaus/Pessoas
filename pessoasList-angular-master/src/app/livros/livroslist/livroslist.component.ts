import { Component, inject } from '@angular/core';
import { Livros } from '../livros';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-livroslist',
  templateUrl: './livroslist.component.html',
  styleUrls: ['./livroslist.component.scss']
})
export class LivroslistComponent {
  lista: Livros[] = [];
  modalService = inject(NgbModal);

  constructor() {
    let livro1 = new Livros();
    livro1.id = 1;
    livro1.autor = "Autor1";
    livro1.nome = "Nome1";

    let livro2 = new Livros();
    livro2.id = 2;
    livro2.autor = "Autor2";
    livro2.nome = "Nome2";

    let livro3 = new Livros();
    livro3.id = 3;
    livro3.autor = "Autor3";
    livro3.nome = "Nome3";

    let livro4 = new Livros();
    livro4.id = 4;
    livro4.autor = "Autor4";
    livro4.nome = "Nome4";

    this.lista.push(livro1);
    this.lista.push(livro2);
    this.lista.push(livro3);
    this.lista.push(livro4);

  }

  abrirModal(abc: any) {
    this.modalService.open(abc, { size: 'lg' });
  }

  listAdd(livro: Livros) {
    this.lista.push(livro);
    this.modalService.dismissAll();
  }
}
