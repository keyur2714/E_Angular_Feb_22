import { Location } from '@angular/common';
import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from '../course.model';
import { CourseService } from '../course.service';



@Component({
  selector: 'app-course-entry',
  templateUrl: './course-entry.component.html',
  styleUrls: ['./course-entry.component.css']
})
export class CourseEntryComponent implements OnInit {

  course : Course = new Course();
  courseId : number = -1;
 
  constructor(private courseService : CourseService,private router : Router,private location : Location,private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {    
    this.courseId = this.activatedRoute.snapshot.params.id;
    this.courseService.getCourseById(this.courseId).subscribe(
      (data)=>{
        this.course = data;
      },
      (error)=>{}
    )
  }

  
  saveCourse(frm : NgForm) : void {
    console.log(frm.value);
    console.log(this.course);
    if(frm.valid){
      this.courseService.saveCourse(this.course).subscribe(
        (data : Course)=>{
          alert("Course Created Successfully with id "+data.id+"...!");
          this.router.navigate(['dashboard/manage-course']);
        }
      )
    }
  }

  updateCourse(frm : NgForm) : void {
    console.log(frm.value);
    console.log(this.course);
    if(frm.valid){
      this.courseService.updateCourse(this.course).subscribe(
        (data : Course)=>{
          alert("Course Updated Successfully with id "+data.id+"...!");
          this.router.navigate(['dashboard/manage-course']);
        }
      )
    }
  }

  back() : void {
    this.location.back();
  }
}
