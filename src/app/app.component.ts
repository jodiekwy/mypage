import { Component } from '@angular/core';

import { Restaurants } from './data/restaurants.data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'A food Label'
  restaurants = Restaurants;
}
