import { Component, OnInit } from '@angular/core';
interface Event {
  title: string;
  date: Date;
  description: string;
}

@Component({
  selector: 'app-events',
  standalone: false,
  templateUrl: './events.html',
  styleUrl: './events.scss'
})
export class Events implements OnInit {
  events: Event[] = [];

  ngOnInit() {
    // In real app, fetch from API or service
    this.events = [
      { title: 'Onam Celebration', date: new Date(2025, 7, 31), description: 'Cultural programs and Sadya' },
      { title: 'Apartment AGM', date: new Date(2025, 9, 15), description: 'Annual General Meeting of residents' },
    ];
  }
}