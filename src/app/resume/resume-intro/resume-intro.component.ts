import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { ResumeDetailsComponent } from '../resume-details/resume-details.component';

@Component({
  selector: 'app-resume-intro',
  templateUrl: './resume-intro.component.html',
  styleUrls: ['./resume-intro.component.scss']
})
export class ResumeIntroComponent implements OnInit {

  constructor(public dialog: MatDialog) {
  }

  ngOnInit() {
  }

  openDialog(id: number) {
    let dialogRef = this.dialog.open(ResumeDetailsComponent, {
      width: '80%'
    });
  
    dialogRef.afterClosed().subscribe(result => {
       console.log('The dialog was closed');
      //  this.animal = result;
    });
  }

}
