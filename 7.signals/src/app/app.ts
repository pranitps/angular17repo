import { Component, signal, computed, effect } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Todo } from './interface/todo';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgFor],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('7.signals');

  count = signal<number>(0);
  todos = signal<Todo[]>([]);
  newTodoText = signal<string>('');

  total = computed(() => this.todos().length);

  constructor() {
    console.log('App constructor');
    effect(() => {
      const items = this.todos().length;
      const evenOrOdd = items % 2 === 0 ? 'even' : 'odd';
      console.log(`Total items: ${items} - ${evenOrOdd}`);
    });
  }

  ngOnInit() {
    console.log('App initialized' + this.count());
    setInterval(() => {
      this.count.update((c) => c + 1);
    }, 1000); 
  }

  handleInput(event: Event) {
    const input = event.target as HTMLInputElement;
    this.newTodoText.set(input.value);
  }

  addTodo() {
    if (this.newTodoText().trim().length) {
      const newTodo: Todo = {
        id: Date.now(), 
        text: this.newTodoText(),
        done: false
      };
      this.todos.set([...this.todos(), newTodo]);
    }
  }

  deleteTodo(id: number) {
    const updatedTodos = this.todos().filter(todo => todo.id !== id);
    this.todos.set(updatedTodos);
  }
}
