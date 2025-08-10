import { Component, OnInit } from '@angular/core';

interface Photo {
  url: string;
  caption: string;
}
@Component({
  selector: 'app-gallery',
  standalone: false,
  templateUrl: './gallery.html',
  styleUrl: './gallery.scss'
})
export class Gallery implements OnInit {
  photos: Photo[] = [];

  ngOnInit() {
    this.photos = [
      { url: 'assets/gallery/img1.jpg', caption: 'Apartment View' },
      { url: 'assets/gallery/img2.jpg', caption: 'Community Hall' },
      { url: 'assets/gallery/img3.jpg', caption: 'Garden Area' },
    ];
  }
}