import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: false,
})
export class AppComponent {
  title = 'convertrix';

  ngOnInit() {
    // All the logic from the original ngOnInit has been moved to the appropriate components or removed.
  }
}
