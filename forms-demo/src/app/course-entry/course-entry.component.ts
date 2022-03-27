import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Course } from './course.model';

@Component({
  selector: 'app-course-entry',
  templateUrl: './course-entry.component.html',
  styleUrls: ['./course-entry.component.css']
})
export class CourseEntryComponent implements OnInit {

  course : Course = new Course();

  constructor() { }

  trainers : string[] = ["Keyur","Jatin","Vaibhav"];

  ngOnInit(): void {
  }


  save(frm : NgForm) : void {
    console.log(frm);
    
    if(frm.valid){
      console.log(frm.value);
      
      console.log(frm.controls['courseCode'].value+" "+frm.controls['fees'].value+" "+frm.controls['courseName'].value+" "+frm.controls['trainerName'].value);

      //this.course = frm.value; //required when two way binding is not there

      console.log(this.course.courseCode+" "+this.course.courseName+" "+this.course.fees+" "+this.course.trainerName);
    }    
  }

}
