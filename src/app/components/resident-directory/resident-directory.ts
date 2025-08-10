import { Component, OnInit } from '@angular/core';

interface Resident {
  name: string;
  apartment: string;
  phone: string;
}
@Component({
  selector: 'app-resident-directory',
  standalone: false,
  templateUrl: './resident-directory.html',
  styleUrl: './resident-directory.scss'
})
export class ResidentDirectory implements OnInit {
  residents: Resident[] = [];

  ngOnInit() {
    this.residents = [
      { name: 'John Doe', apartment: 'A101', phone: '9999999999' },
      { name: 'Jane Smith', apartment: 'B202', phone: '8888888888' },
    ];
  }
}