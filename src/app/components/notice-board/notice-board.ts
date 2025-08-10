import { Component, OnInit } from '@angular/core';

interface Notice {
  title: string;
  date: Date;
  content: string;
}
@Component({
  selector: 'app-notice-board',
  standalone: false,
  templateUrl: './notice-board.html',
  styleUrl: './notice-board.scss'
})
export class NoticeBoard implements OnInit {
  notices: Notice[] = [];

  ngOnInit() {
    this.notices = [
      { title: 'Water Supply Disruption', date: new Date(2025, 7, 20), content: 'Water supply will be disrupted from 9am to 3pm due to maintenance.' },
      { title: 'Fire Drill', date: new Date(2025, 7, 25), content: 'Mandatory fire safety drill at 10am.' },
    ];
  }
}