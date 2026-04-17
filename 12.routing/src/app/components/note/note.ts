import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-note',
  imports: [],
  templateUrl: './note.html',
  styleUrl: './note.css',
})
export class Note {

  noteId: string | null = null;

  constructor(private route: ActivatedRoute) {
    
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.noteId = params.get('id');
    });
  }
}
