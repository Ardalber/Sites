import { Component, OnInit } from '@angular/core';
import { produit } from 'src/model/produit.model';
import { LesProduitsService } from 'src/services/les-produits.service';
@Component({
  selector: 'app-liste-de-produit',
  templateUrl: './liste-de-produit.component.html',
  styleUrls: ['./liste-de-produit.component.css']
})
export class ListeDeProduitComponent implements OnInit {
  tabProduit!: produit[];
  constructor(private toto: LesProduitsService) { }
  ngOnInit() {
    this.tabProduit = this.toto.listerProduits();

    // this.tabProduit = [
    //   {
    //     name: "gateaux",
    //     price: 100,
    //     available: false

    //   },
    //   {

    //     name: "palinka",
    //     price: 250,
    //     available: true
    //   },
    //   {

    //     name: "écran",
    //     price: 349876,
    //     available: false

    //   }







  }




}
