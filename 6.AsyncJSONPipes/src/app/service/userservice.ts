import { Injectable } from '@angular/core';
import { Data } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Userservice {
 
  getUsers() : Observable<Data[]> {
    return of([
      { id: 1, name: 'John Doe' },
      { id: 2, name: 'Jane Smith' },
      { id: 3, name: 'Alice Johnson' },
    ]);
  }
}
