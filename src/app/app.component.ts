import { Component } from '@angular/core';

/**
 * @Component(...) is TypeScript decorator with passed parameters like:
 * - selector, to generate our component declaration
 * - templateUrl, to define where angular should take our markup
 * - styleUrls, to define where angular should take CSS from
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'idol-service-web';
}
