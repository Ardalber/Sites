import { Component, OnInit } from '@angular/core';
import { Voiture } from 'src/Models/voiture.models';

@Component({
  selector: 'app-voiture',
  templateUrl: './voiture.component.html',
  styleUrls: ['./voiture.component.css']
})
export class VoitureComponent implements OnInit {
  newCar !: Voiture;
  ngOnInit() {
    this.newCar = new Voiture;
    this.newCar.marque = 'audi';
    this.newCar.couleur = 'black';
    this.newCar.poids = 1500;
    this.newCar.modele = 'sport';
    this.newCar.dateDachat = '2001';
    this.newCar.img = 'assets/images/audi.jpeg';
    this.newCar.client = true;
  }
}
