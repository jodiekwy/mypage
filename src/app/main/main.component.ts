import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  title = 'Life of Food'
  subtitle = 'All the incredible food I would recommend you to try–from everyday to a special day '

  constructor() { }

  ngOnInit() {
  }

}
