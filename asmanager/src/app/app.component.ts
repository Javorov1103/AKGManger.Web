import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  template: '<router-outlet></router-outlet>',
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'asmanager';
}
