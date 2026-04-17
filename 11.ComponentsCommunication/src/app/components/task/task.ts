import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class Task {

  @Input() val: string = '';
  @Output() taskDeleted = new EventEmitter<string>();

  onDeleteClick() {
    this.taskDeleted.emit(this.val);
  }
}
