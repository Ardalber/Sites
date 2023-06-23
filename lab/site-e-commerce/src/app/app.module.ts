import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { ListeDeProduitComponent } from './liste-de-produit/liste-de-produit.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    ListeDeProduitComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
