import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topicos',
  templateUrl: './topicos.component.html',
  styleUrls: ['./topicos.component.scss']
})
export class TopicosComponent implements OnInit {

  mostrarRespostas = false; 

  toggleRespostas() {
    this.mostrarRespostas = !this.mostrarRespostas;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
