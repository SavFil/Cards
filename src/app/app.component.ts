import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [
    {
      title: 'Neat Tree',
      imageUrl: 'assets/img1.jpg',
      username: 'nature',
      content: 'I saw this neat tree today'
    },
    {
      title: 'Snowy Mountain',
      imageUrl: 'assets/img2.jpg',
      username: 'mountainlover',
      content: 'Here is a picture of a snowy mountain'
    },
    {
      title: 'Mountain Biking',
      imageUrl: 'assets/img3.jpg',
      username: 'biking12222',
      content: 'I like biking'
    },
    {
      title: 'Hawaii 5 - 0',
      imageUrl: 'assets/img3.jpg',
      username: 'ICopiedYourPhoto',
      content: 'You mad bruh?'
    }
  ];
}
