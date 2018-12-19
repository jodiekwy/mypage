import { Component, OnInit, Input } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

import Restaurant from '../..//models/restaurant.modle';

import { RestaurantDetailsComponent } from '../restaurant-details/restaurant-details.component';


export interface DialogData {
  Restaurant : Restaurant;
}

@Component({
  selector: 'restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.scss']
})
export class RestaurantListComponent implements OnInit {

  regularDistribution = 100 / 3;
  
  @Input ()
  list : Restaurant[];

  constructor(public dialog: MatDialog) {
  }

  openDialog(id: number) {
    let dialogRef = this.dialog.open(RestaurantDetailsComponent, {
      width: '80%',
      data : this.list[id]
    });
  
    dialogRef.afterClosed().subscribe(result => {
       console.log('The dialog was closed');
      //  this.animal = result;
    });
  }
  

  ngOnInit() {
  }

}

// @Component({
//   selector: 'dialog-overview-example-dialog',
//   templateUrl: 'restaurant-dialog.html',
// })
// export class DialogOverviewExampleDialog {

//   constructor(
//     public dialogRef: MatDialogRef<DialogOverviewExampleDialog>
//      //@Inject(MAT_DIALOG_DATA) public data: DialogData
//     ) {}

//   onNoClick(): void {
//     this.dialogRef.close();
//   }


