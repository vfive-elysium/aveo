import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {
  contact = {
    name: '',
    email: '',
    message: ''
  };

  submitForm() {
    if (this.contact.name && this.contact.email && this.contact.message) {
      alert('Thank you for contacting us, ' + this.contact.name + '!');
      this.contact = { name: '', email: '', message: '' }; // reset form
    }
  }
}