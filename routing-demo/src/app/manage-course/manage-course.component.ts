import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from '../course.model';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-manage-course',
  templateUrl: './manage-course.component.html',
  styleUrls: ['./manage-course.component.css']
})
export class ManageCourseComponent implements OnInit {

  courseList : Course[] = [];

  constructor(private courseService : CourseService,private router:Router) { }

  ngOnInit(): void {
    this.getAllCourses();
  }

  getAllCourses() : void {
    this.courseService.getAllCourse().subscribe(
      (data)=>{
        this.courseList = data;
      },
      (error)=>{}
    )
  }

  getCourseDetail(id : number) : void {
    this.router.navigate(['dashboard/course-detail',id]);
  }

  newCourse() : void {
    this.router.navigate(['dashboard/add-course']);
  }

  edit(id : number) : void {
    this.router.navigate(['dashboard/update-course',id]);
  }

  delete(id : number) : void {
    let confirmMsg = confirm("Are you sure want to delete Course with Id "+id+" ?");
    if(confirmMsg){
      this.courseService.deleteCourseById(id).subscribe(
        (data)=>{
          alert("Course Deleted successfully with id : "+id);
          this.getAllCourses();
        }
      )
    } 
  }
}
