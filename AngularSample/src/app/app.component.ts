import { Component } from '@angular/core';
//template url
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

//template Property:
// @Component({
//   selector: 'app-root',
//   template: '<p>This is an inline template.</p>',
// })

export class AppComponent {
  title = 'AngularSample';
  //Invoke a method in the component using Interpolation
  homeTitle = 'Home Page';
  getTitle(): string {
     return this.homeTitle;
 }
}
