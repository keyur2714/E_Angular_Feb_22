import { Component, OnInit } from '@angular/core';
import { Course } from './course.model';
import { CourseService } from './course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  courseId : number = -1;
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

  refreshData(event) : void {
    if(event){
      this.getAllCourses();
    }
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

  edit(courseId) : void {
    this.courseId = courseId;
  }

}
