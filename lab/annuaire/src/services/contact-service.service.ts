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
      url: 'assets/images/benny-hill.jpeg',
      client: false,
      id: 0
    },
    {
      name: "marcel",
      lastName: "Cerdan",
      age: 30,
      url: 'assets/images/marcel-cerdan.jpeg',
      client: false,
      id: 1

    },

    {
      name: "serge",
      lastName: "Benamou",
      age: 56,
      url: 'assets/images/serge-benamou.jpeg',
      client: true,
      id: 2


    },



  ];

  listerContacts(): ContactModel[] {

    return this.tabContact;

  }


  affDetails(id: number): ContactModel {
    for (let i = 0; i < this.tabContact.length; i++) {

      if (this.tabContact[i].id === id) {

        return this.tabContact[i];
      }
    }
    return new ContactModel();

  }

}
