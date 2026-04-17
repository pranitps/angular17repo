import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterLinkWithHref, RouterOutlet, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, RouterLinkWithHref],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('12.routing');

  constructor(private router: Router) {}

  navigateToNotes() {
    this.router.navigate(['/notes']);
  }

  navigateToNote(id: number) {
    this.router.navigate(['/notes', id]);
  }
}
