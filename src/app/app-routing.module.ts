import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// const appRoutes: Routes = [
//   { path: 'main', component: MainComponent},
//   { path: 'about', component: AboutComponent },
//   { path: 'projects', component: PortfolioComponent },
//   // {
//   //   path: 'heroes',
//   //   component: HeroListComponent,
//   //   data: { title: 'Heroes List' }
//   // },
//   { path: '',
//     redirectTo: '/main',
//     pathMatch: 'full'
//   },
//   { path: '**', component: MainComponent }
// ];


// @NgModule({
//   imports: [RouterModule.forRoot(
//      route
//     // { enableTracing: true } // <-- debugging purposes only
//   )],
//   exports: [RouterModule]
// })
