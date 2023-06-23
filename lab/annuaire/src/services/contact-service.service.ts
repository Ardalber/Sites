import { Injectable } from '@angular/core';
import { ContactModel } from 'src/Models/contact.models';
@Injectable({
  providedIn: 'root'
})
export class ContactServiceService {

  tabContact: ContactModel[] = [

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


    },



  ];

  listerContacts(): ContactModel[] {

    return this.tabContact;

  }


}


