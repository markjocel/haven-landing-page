import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  contactForm = new FormGroup({
    fullName: new FormControl(''),
    email: new FormControl(''),
    contactNo: new FormControl(''),
    service: new FormControl(''),
    preferredDay: new FormControl(''),
    preferredTime: new FormControl(''),
    message: new FormControl(''),
  });

  contacts: {contact: string, link: string, icon: string}[] = [
    {
      contact:  "Find an adviser",
      link: "/",
      icon: "./facebook.png"
    },
    {
      contact:  "Talk to an Accountant",
      link: "/",
      icon: "./facebook.png"
    },
    {
      contact:  "Talk to a Mortgate broker",
      link: "/",
      icon: "./facebook.png"
    },
    {
      contact:  "0800 700 699",
      link: "/",
      icon: "./facebook.png"
    },
    {
      contact:  "reception@havenadvisers.co.nz",
      link: "/",
      icon: "./facebook.png"
    },
    {
      contact:  "Be a part of our Facebook community",
      link: "/",
      icon: "./facebook.png"
    }
  ]
}
