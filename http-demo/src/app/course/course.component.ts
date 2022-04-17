import { Component, OnInit } from '@angular/core';
import { Course } from './course.model';
import { CourseService } from './course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  courseList : Course[] = [];
  selectedCourse : Course = new Course();

  constructor(private courseService : CourseService) { }

  ngOnInit(): void {
    this.getAllCourses();
  }


  getAllCourses() : void {
    this.courseService.getAllCourses().subscribe(
      (data : Course[])=>{
        this.courseList = data;
      },
      (error)=>{
        console.log(error);
      }
    );
  }

  getCourseDetail(id: number) : void {
    this.courseService.getCourseById(id).subscribe(
      (data : Course)=>{
        this.selectedCourse = data;
      },
      (error)=>{

      }
    )
  }


}
