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

  alternarFormulario() {
    this.mostrarFormulario = !this.mostrarFormulario;
  }

  mostrarFormularioCriacao() {
    this.mostrarFormulario = true;
    this.mostrarElementos = false;
  }

  criarTopico() {
    this.topicoEnviado = true;
    this.mostrarFormulario = false;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
