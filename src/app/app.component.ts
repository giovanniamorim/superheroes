import { Component } from '@angular/core';
import { slideAnimation } from './animations/animations';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [slideAnimation],
})
export class AppComponent {
  getAnimationData(outlet: RouterOutlet) {
    return (
      outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation
    );
  }
}
