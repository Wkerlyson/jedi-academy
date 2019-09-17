import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'jad-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  @Input() name: string
  @Input() isJedi: boolean

  constructor() { }

  ngOnInit() {
  }

}
