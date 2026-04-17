import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Msgservice } from './services/msgservice';
import { Post } from './interface/post';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor],
  providers: [Msgservice],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('8.InterfacesObservables');

  posts: Post[] = [];

  constructor(private msgService: Msgservice) {}

  ngOnInit() {
    this.msgService.getPosts().subscribe({
      next: (response: Post[]) => {
        this.posts = response;
      },
      error: (error: Error) => {
        console.error('Error fetching posts:', error);
      }
    }); 
  }
}
