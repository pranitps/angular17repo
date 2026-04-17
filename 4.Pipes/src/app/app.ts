import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DatePipe, LowerCasePipe, UpperCasePipe, CurrencyPipe, PercentPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DatePipe, LowerCasePipe, UpperCasePipe, CurrencyPipe, PercentPipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('4.Pipes');

  today: number = Date.now();

  price: number = 123.456789;

  percent: number = 0.75;
}
