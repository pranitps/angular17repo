import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataService } from './services/dataservice';
import { Data } from './interface/data';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgFor],
  providers: [DataService],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('5.DIServices');

  data: string[] = [];
  postsData: Data[] = [];

  constructor(private dataService: DataService) {
    this.data = this.dataService.getData();
  }

  ngOnInit() {
    this.dataService.getPosts().subscribe({
      next: (response: Data[]) => {
        this.postsData = response;
      },
      error: (error: Error) => {
        console.error('Error fetching posts:', error);  
      }
    });
  } 
}
