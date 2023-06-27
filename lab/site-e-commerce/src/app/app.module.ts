import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { ListeDeProduitComponent } from './liste-de-produit/liste-de-produit.component';
import { AfficherDetailsComponent } from './afficher-details/afficher-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    ListeDeProduitComponent,
    AfficherDetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
