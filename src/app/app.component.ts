import { Student } from './students/student.model';
import { Component } from '@angular/core';

@Component({
  selector: 'jad-root',
  templateUrl: './app.component.html',
})
export class AppComponent {

  students: Student[] = [
    {name: 'luke', isJedi: true, temple: 'Coruscant'},
    {name: 'Leia', isJedi: false},
    {name: 'Han Solo', isJedi: false}
  ]
}
