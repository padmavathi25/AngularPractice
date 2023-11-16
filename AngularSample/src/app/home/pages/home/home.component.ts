import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  //Invoke a method in the component using Interpolation
  homeTitle = 'Home Page';
  getTitle(): string {
     return this.homeTitle;
 }

}
