import { Component, EventEmitter, Output, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { pessoa } from '../pessoa';

@Component({
  selector: 'app-pessoasdetails',
  templateUrl: './pessoasdetails.component.html',
  styleUrls: ['./pessoasdetails.component.scss']
})
export class PessoasdetailsComponent {

  roteador = inject(ActivatedRoute);
  pessoa: pessoa = new pessoa();

  @Output() retorno = new EventEmitter<pessoa>();



  constructor() {
    let id = this.roteador.snapshot.paramMap.get('id');

    console.log(id);
  }

  salvar() {
    this.retorno.emit(this.pessoa);
  }
}
