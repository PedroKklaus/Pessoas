import { Component, inject } from '@angular/core';
import { pessoa } from '../pessoa';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-pessoalist',
  templateUrl: './pessoalist.component.html',
  styleUrls: ['./pessoalist.component.scss']
})
export class PessoalistComponent {
  lista: pessoa[] = [];
  modalService = inject(NgbModal);

  constructor() {
    let pessoa1: pessoa = new pessoa();

    pessoa1.id = 1;
    pessoa1.nome = "PessoaTeste1";
    pessoa1.idade = 20;

    let pessoa2: pessoa = new pessoa();
    pessoa2.id = 2;
    pessoa2.nome = "PessoaTeste2";
    pessoa2.idade = 30;

    let pessoa3: pessoa = new pessoa();
    pessoa3.id = 3;
    pessoa3.nome = "PessoaTeste3";
    pessoa3.idade = 40;

    let pessoa4: pessoa = new pessoa();
    pessoa4.id = 4;
    pessoa4.nome = "PessoaTeste4";
    pessoa4.idade = 50;



    this.lista.push(pessoa1);
    this.lista.push(pessoa2);
    this.lista.push(pessoa3);
    this.lista.push(pessoa4);
  }

  abrirModal(abc: any){
    this.modalService.open(abc, { size: 'lg' });
  }

  listAdd(pessoa: pessoa){
    this.lista.push(pessoa);
    this.modalService.dismissAll();
  }
}
