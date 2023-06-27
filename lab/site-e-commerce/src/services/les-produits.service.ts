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
      available: false,
      id: 0

    },
    {

      name: "palinka",
      price: 250,
      available: true,
      id: 1
    },
    {

      name: "écran",
      price: 349876,
      available: false,
      id: 2

    }
  ];

  listerProduits(): produit[] {

    return this.tabProduit;
  }

}
