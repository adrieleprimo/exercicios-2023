import { Component } from '@angular/core';

@Component({
  selector: 'app-resumo',
  templateUrl: './resumo.component.html',
  styleUrls: ['./resumo.component.scss'],
})
export class ResumoComponent {
  isAmpliar = false;

  alternarResumo() {
    this.isAmpliar = !this.isAmpliar;
  }
}
