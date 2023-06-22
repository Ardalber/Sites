import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import AppComponent from './app.component';
import { CarteComponent } from './carte/carte.component';
import { VoitureComponent } from './voiture/voiture.component';
import { ListeContactsComponent } from './liste-contacts/liste-contacts.component';

@NgModule({
  declarations: [
    AppComponent,
    CarteComponent,
    VoitureComponent,
    ListeContactsComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
