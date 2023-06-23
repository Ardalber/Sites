import { Injectable } from '@angular/core';
import { produit } from 'src/model/produit.model';

@Injectable({
  providedIn: 'root'
})
export class LesProduitsService {

  tabProduit: produit[] = [
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

  listerProduits(): produit[] {

    return this.tabProduit;
  }
}
