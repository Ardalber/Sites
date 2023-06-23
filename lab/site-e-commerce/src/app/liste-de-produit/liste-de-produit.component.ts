import { Component, OnInit } from '@angular/core';
import { produit } from 'src/model/produit.model';
@Component({
  selector: 'app-liste-de-produit',
  templateUrl: './liste-de-produit.component.html',
  styleUrls: ['./liste-de-produit.component.css']
})
export class ListeDeProduitComponent implements OnInit {
  tabProduit!: produit[];
  ngOnInit() {
    this.tabProduit = [
      {
        name: "gateaux",
        price: 100,
        available: false

      },
      {

        name: "palinka",
        price: 250,
        available: true
      },
      {

        name: "écran",
        price: 349876,
        available: false

      }






    ];
  }




}
