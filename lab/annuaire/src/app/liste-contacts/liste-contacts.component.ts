import { Component, OnInit } from '@angular/core';
import { ContactModel } from 'src/Models/contact.models';
import { ContactServiceService } from 'src/services/contact-service.service';
@Component({
  selector: 'app-liste-contacts',
  templateUrl: './liste-contacts.component.html',
  styleUrls: ['./liste-contacts.component.css']
})
export class ListeContactsComponent implements OnInit {
  tab!: ContactModel[];
  constructor(private peuImporte: ContactServiceService) { }
  ngOnInit() {


    this.tab = this.peuImporte.listerContacts();
  }

};






