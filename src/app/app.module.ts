import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Importez FormsModule ici

import { AppComponent } from './app.component';
import { CarteVisiteComponent } from './carte-visite/carte-visite.component'; // Assurez-vous d'importer votre composant

@NgModule({
  declarations: [
    AppComponent,
    CarteVisiteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule // Ajoutez FormsModule ici
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
