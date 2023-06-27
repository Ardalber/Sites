import { Component, OnInit } from '@angular/core';
import { ContactModel } from 'src/Models/contact.models';
import { ContactServiceService } from 'src/services/contact-service.service';
@Component({
  selector: 'app-afficher-par-id',
  templateUrl: './afficher-par-id.component.html',
  styleUrls: ['./afficher-par-id.component.css']
})
export class AfficherParIdComponent implements OnInit {
  details!: ContactModel;
  constructor(private peuImporte: ContactServiceService) { }
  ngOnInit() {


    this.details = this.peuImporte.affDetails(0);


  }

};

