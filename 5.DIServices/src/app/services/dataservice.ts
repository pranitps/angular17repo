import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Data } from '../interface/data';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {}

  getData(): string[] {
    return ['Angular', 'TypeScript', 'Dependency Injection', 'Services', 'Components'];
  }

  getPosts(): Observable<Data[]> {
    return this.http.get<Data[]>(this.apiUrl);
  }
}
