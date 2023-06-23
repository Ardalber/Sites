import { Component, Input, OnInit } from '@angular/core';
import { ContactModel } from 'src/Models/contact.models';
@Component({
  selector: 'app-carte',
  templateUrl: './carte.component.html',
  styleUrls: ['./carte.component.css']
})
export class CarteComponent implements OnInit {

  @Input() coordonnee!: ContactModel;

  ngOnInit() {


  }



}



