import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-discussoes',
  templateUrl: './discussoes.component.html',
  styleUrls: ['./discussoes.component.scss']
})
export class DiscussoesComponent implements OnInit {
 
  novoTopico = {
    assunto: '',
    conteudo: ''
  };
  mostrarFormulario = false;
  topicoEnviado = false;
  mostrarElementos = true; 


  mostrarFormularioCriacao() {
    this.mostrarFormulario = true;
    this.mostrarElementos = false;
  }

  criarTopico() {
    this.topicoEnviado = true;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
