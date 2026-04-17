import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Task } from './components/task/task';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Task],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('11.ComponentsCommunication');

  tasks: string[] = ['Task 1', 'Task 2', 'Task 3'];

  deleteTask(task: string) {
    console.log('Deleting task:', task);
    this.tasks = this.tasks.filter(t => t !== task);
  }
}
