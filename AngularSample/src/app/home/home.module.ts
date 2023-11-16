
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';



const routes: Routes = [
  {   path: '',   component: HomeComponent   },
  {   path: 'home',   component: HomeComponent   },
  {   path: 'contact',   component: ContactComponent   },
  {   path: 'about',   component: AboutComponent   },
];

@NgModule({
  declarations: [
    HomeComponent,
    ContactComponent,
    AboutComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  providers: [],
})
export class HomeModule { }
