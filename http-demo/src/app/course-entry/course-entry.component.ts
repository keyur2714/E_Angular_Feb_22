import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Course } from '../course/course.model';

@Component({
  selector: 'app-course-entry',
  templateUrl: './course-entry.component.html',
  styleUrls: ['./course-entry.component.css']
})
export class CourseEntryComponent implements OnInit {

  course : Course = new Course();

  constructor() { }

  ngOnInit(): void {
  }

  saveCourse(frm : NgForm) : void {

  }
}
