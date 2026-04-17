import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgIf, NgFor, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf, NgFor, NgSwitch, NgSwitchCase, NgSwitchDefault],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('2.StructureDirective');

  isLoggedIn: boolean = false;
  username: string = 'Pranit';

  names: string[] = ['Pranit', 'Satyarth', 'Shivam'];

  grade: string = 'C';
}
