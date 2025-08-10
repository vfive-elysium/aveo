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


      { title: 'Independence Day Celebrations', date: new Date(2025, 7, 15), description: 'Flag Hoisitng, Patriotioc Song, India in Many Languages, Quiz Competition' },

      { title: 'Onam Celebration', date: new Date(2025, 7, 31), description: 'Cultural programs, Sports and Sadya' },
    ];
  }
}