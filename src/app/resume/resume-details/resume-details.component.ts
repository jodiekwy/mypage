import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-resume-details',
  templateUrl: './resume-details.component.html',
  styleUrls: ['./resume-details.component.scss']
})
export class ResumeDetailsComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ResumeDetailsComponent>) { 
  }

  ngOnInit() {
  }

  closedialog(): void {
    this.dialogRef.close();
  }

}
