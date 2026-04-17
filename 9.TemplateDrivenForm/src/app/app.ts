import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { NgFor } from '@angular/common';

interface User {
  name: string;
  email: string;
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected readonly title = signal('9.TemplateDrivenForm');

  user: User = {
    name: '',
    email: ''
  };

  submitForm(form: NgForm) {
    if (form.valid) {
      console.log(form.value, this.user);
    }
  }

  validateEmail(email: string): boolean {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }
}
