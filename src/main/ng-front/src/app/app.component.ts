import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <h3><span style="font-family: 'Pacifico', cursive; font-weight: 400;">Guestbook.io </span>| <span style="font-size: 32px; font-family: teko;">Where guests feel at home</span></h3>
    <router-outlet/>
  `,
  styles: [],
})
export class AppComponent {
  title = 'ng-front';
}
