import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AnaliseSensorialComponent } from './analise-sensorial/analise-sensorial.component';
import { ResumoComponent } from './resumo/resumo.component';
import { DiscussoesComponent } from './discussoes/discussoes.component';
import { FormsModule } from '@angular/forms';
import { TopicosComponent } from './topicos/topicos.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AnaliseSensorialComponent,
    ResumoComponent,
    DiscussoesComponent,
    TopicosComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
