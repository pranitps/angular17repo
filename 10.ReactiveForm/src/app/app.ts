import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ReactiveFormsModule, NgFor],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('10.ReactiveForm');

  userForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.userForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [
        Validators.required,
        Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
      ]],
      address: this.formBuilder.group({
        street: ['', Validators.required],
        city: ['', Validators.required]
      }),
      phoneNumbers: this.formBuilder.array([
        this.formBuilder.control('', [
          Validators.required,
          Validators.pattern(/^\d{10}$/)
        ])
      ])
    });
  }

  get phoneNumbers(): FormArray {
    return this.userForm.get('phoneNumbers') as FormArray;
  }

  addPhoneNumber() {
    this.phoneNumbers.push(this.formBuilder.control('', [
      Validators.required,
      Validators.pattern(/^\d{10}$/)
    ]));
  }

  removePhoneNumber(index: number) {
    this.phoneNumbers.removeAt(index);
  }
  
  submitForm() {
    if (this.userForm.valid) {
      console.log(this.userForm.value);
    } else {
      this.userForm.markAllAsTouched();
    }
  }
}