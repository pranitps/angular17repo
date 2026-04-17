import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgClass, NgStyle } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, NgClass, NgStyle],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('1.introduction');

  //interpolation example
  title1 = "Binding Example";
  myBtn = "My Button";

  //attribute binding example
  isDisabled: boolean = true;

  //stype binding example
  bgColor: string = "yellow";
  titleColor: string = "blue";

  //class binding example
  redText: string = 'abcd';

  //Two way binding example
  title2: string = "Two Way Binding Example";
  counter: number = 0;

  incrementCounter() {
    this.counter++;
  }

  inputText: string = "Initial Text";

  //ngClass example
  message: string = "This is a error message";
  classes: string = 'danger text-size';

  //ngStyle example
  selectedColor: string = 'red';

}
