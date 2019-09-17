import { Component, OnInit, Input } from '@angular/core';

import { Student } from './student.model';
import { from } from 'rxjs';

@Component({
  selector: 'jad-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  @Input() student: Student

  constructor() { }

  ngOnInit() {
  }

}
