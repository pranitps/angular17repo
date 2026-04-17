import { Component, signal } from '@angular/core';
import { Data, RouterOutlet } from '@angular/router';
import { Userservice } from './service/userservice';
import { AsyncPipe, JsonPipe, NgIf, NgFor } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf, AsyncPipe, JsonPipe, NgFor],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  protected readonly title = signal('6.AsyncJSONPipes');

  user: Observable<Data[]> | undefined;

  constructor(private userservice: Userservice) {
    this.user = this.userservice.getUsers();
  }
}
