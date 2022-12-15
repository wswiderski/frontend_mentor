import { Component } from '@angular/core';

import {
  faFacebookSquare,
  faInstagram,
  faPinterest,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  facebookIcon = faFacebookSquare;
  instagramIcon = faInstagram;
  pinterestIcon = faPinterest;
}
