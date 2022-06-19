import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from '../manage-course/course-service';
import { Course } from '../manage-course/course.model';

@Component({
  selector: 'app-course-entry',
  templateUrl: './course-entry.component.html',
  styleUrls: ['./course-entry.component.css']
})
export class CourseEntryComponent implements OnInit{
  courseId : number = 0;
  isUpdate : boolean = false;
  courseEntryForm = this.fb.group({
    id: [null, Validators.required],
    code: [null, Validators.required],
    name: [null, Validators.required],
    fees: [null, Validators.required],
    trainerName: null    
  });

  
  constructor(private fb: FormBuilder,private courseService : CourseService,private router : Router,private activatedRoute:ActivatedRoute) {}

  ngOnInit(): void {
    this.courseId = this.activatedRoute.snapshot.params.id;
    if(this.courseId === undefined){
      this.courseId = 0;
    }
    //alert(this.courseId);
    if(this.courseId > 0){
      this.isUpdate = true;
      this.courseService.getCourseById(this.courseId).subscribe(
        (data)=>{
          this.courseEntryForm.setValue(data);
        }
      )
    }
  }

  onSubmit(): void {
    console.log(this.courseEntryForm.value);
    if(this.courseEntryForm.valid){
      let course : Course = this.courseEntryForm.value;
      if(this.isUpdate){
        this.courseService.updateCourse(course).subscribe(
          (data)=>{
            alert('Course Updated Successfully.');
            this.router.navigate(['/manage-course']);
          }
        )
      }else{
        this.courseService.saveCourse(course).subscribe(
          (data)=>{
            alert('Course Created Successfully.');
            this.router.navigate(['/manage-course']);
          }
        )
      }
      
      
    }
    
  }
}
