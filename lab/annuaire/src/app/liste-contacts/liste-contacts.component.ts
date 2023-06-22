import { Component, OnInit } from '@angular/core';
import { ContactModel } from 'src/Models/contact.models';
@Component({
  selector: 'app-liste-contacts',
  templateUrl: './liste-contacts.component.html',
  styleUrls: ['./liste-contacts.component.css']
})
export class ListeContactsComponent implements OnInit {
  tab!: ContactModel[];
  ngOnInit() {

    this.tab = [

      {
        name: "benny",
        lastName: "Hill",
        age: 25,
        url: 'assets/images/bennyHill.jpeg',
        client: false
      },
      {
        name: "marcel",
        lastName: "Cerdan",
        age: 30,
        url: 'assets/images/marcelCerdan.jpeg',
        client: false

      },

      {
        name: "serge",
        lastName: "Benamou",
        age: 56,
        url: 'assets/images/sergeBenamou.jpeg',
        client: true


      }
    ]

  }

};






