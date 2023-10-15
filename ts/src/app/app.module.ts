import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AnaliseSensorialComponent } from './analise-sensorial/analise-sensorial.component';
import { ResumoComponent } from './resumo/resumo.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AnaliseSensorialComponent,
    ResumoComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
