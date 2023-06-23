import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import AppComponent from './app.component';
import { CarteComponent } from './carte/carte.component';
import { VoitureComponent } from './voiture/voiture.component';
import { ListeContactsComponent } from './liste-contacts/liste-contacts.component';
import { AfficherParIdComponent } from './afficher-par-id/afficher-par-id.component';

@NgModule({
  declarations: [
    AppComponent,
    CarteComponent,
    VoitureComponent,
    ListeContactsComponent,
    AfficherParIdComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
