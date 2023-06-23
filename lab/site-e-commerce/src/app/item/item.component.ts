import { Component, Input, OnInit } from '@angular/core';
import { produit } from 'src/model/produit.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() item !: produit;
  ngOnInit() {

    // this.item = new produit;
    // this.item.name = "brosse";
    // this.item.price = 99;
    // this.item.available = true;

  }

}
