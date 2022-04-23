import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Course } from '../course/course.model';
import { CourseService } from '../course/course.service';

@Component({
  selector: 'app-course-entry',
  templateUrl: './course-entry.component.html',
  styleUrls: ['./course-entry.component.css']
})
export class CourseEntryComponent implements OnInit, AfterViewInit {

  @Input() id : number = -1;

  course : Course = new Course();

  @Output() isRefresh = new EventEmitter<boolean>();

  constructor(private courseService : CourseService) { }

  ngOnInit(): void {    
    alert(this.id);
    if(this.id !== -1){
      alert(2);
      this.courseService.getCourseById(this.id).subscribe(
        (data : Course)=>{
          this.course = data;
          alert(this.course);
        },
        (error)=>{}
      )
    }
  }

  ngAfterViewInit(): void {
    alert(this.id);
    if(this.id !== -1){
      this.courseService.getCourseById(this.id).subscribe(
        (data : Course)=>{
          this.course = data;
          alert(this.course);
        },
        (error)=>{}
      )
    }
  }

  saveCourse(frm : NgForm) : void {
    console.log(frm.value);
    console.log(this.course);
    if(frm.valid){
      this.courseService.saveCourse(this.course).subscribe(
        (data : Course)=>{
          alert("Course Created Successfully with id "+data.id+"...!");
          this.isRefresh.emit(true);
        }
      )
    }
  }
}
