import { Component, OnInit } from '@angular/core';
import { car } from 'src/model/car.model';
@Component({
  selector: 'app-new-car',
  templateUrl: './new-car.component.html',
  styleUrls: ['./new-car.component.css']
})
export class NewCarComponent implements OnInit {

  car!: car;
  ngOnInit() {
    this.car = new car;
    this.car.model = 'audi TT';
    this.car.brand = 'audi';
    this.car.year = '2030';
    this.car.color = 'red';
    this.car.price = 1000000;
    this.car.weight = 1500;
    this.car.description = 'belle voiture';
    this.car.image = 'assets/images/audi-TT.jpeg';
  }

}

