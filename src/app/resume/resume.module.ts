import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResumeDetailsComponent } from './resume-details/resume-details.component';
import { ResumeIntroComponent } from './resume-intro/resume-intro.component';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatExpansionModule } from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';

import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from'@angular/material/icon';

@NgModule({
  declarations: [
    ResumeDetailsComponent,
    ResumeIntroComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatIconModule
  ],
  entryComponents: [
    ResumeDetailsComponent
  ],
  exports: [
    ResumeDetailsComponent,
    ResumeIntroComponent
  ]
})
export class ResumeModule { }
