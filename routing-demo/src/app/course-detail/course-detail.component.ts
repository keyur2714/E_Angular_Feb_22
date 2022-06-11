import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {

  courseId : number = 0;

  constructor(private activatedRoute : ActivatedRoute,private location : Location) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (param)=>{
        this.courseId = param.id;
      }
    )
  }


  back() : void{
    this.location.back();
  }
}
