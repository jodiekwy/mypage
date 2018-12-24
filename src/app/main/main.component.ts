import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  title = 'A food Label'
  subtitle = 'All the incredible food that are recommended for you to try from everyday to a special day '

  constructor() { }

  ngOnInit() {
  }

}
