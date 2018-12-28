import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AboutComponent } from './about/about.component';
import { ResumeModule} from './resume/resume.module';
import { ContactComponent } from './contact/contact.component';
import { MainComponent } from './main/main.component';
import { RestaurantsModule} from './restaurants/restaurants.module';

import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from'@angular/material/icon';

    
@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RestaurantsModule,
    ResumeModule,
    MatButtonModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
