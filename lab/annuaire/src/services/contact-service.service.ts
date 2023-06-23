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
      client: false,
      id: 0
    },
    {
      name: "marcel",
      lastName: "Cerdan",
      age: 30,
      url: 'assets/images/marcelCerdan.jpeg',
      client: false,
      id: 1

    },

    {
      name: "serge",
      lastName: "Benamou",
      age: 56,
      url: 'assets/images/sergeBenamou.jpeg',
      client: true,
      id: 2


    },



  ];

  listerContacts(): ContactModel[] {

    return this.tabContact;

  }

}


