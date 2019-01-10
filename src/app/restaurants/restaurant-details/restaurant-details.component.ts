import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import Restaurant from 'src/app/models/restaurant.modle';

@Component({
  selector: 'app-restaurant-details',
  templateUrl: './restaurant-details.component.html',
  styleUrls: ['./restaurant-details.component.scss']
})
export class RestaurantDetailsComponent implements OnInit {
  
  restaruant: Restaurant;

  constructor(
    public dialogRef: MatDialogRef<RestaurantDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { 
    this.restaruant = data;
  }

  ngOnInit() {
  }

  closedialog(): void {
    this.dialogRef.close();
  }

  openlink(): void {
    window.open(this.restaruant.website);
  }

}
