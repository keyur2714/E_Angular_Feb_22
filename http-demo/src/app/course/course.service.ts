import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from './course.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private httpClient : HttpClient) { }

  getAllCourses() : Observable<Course[]>{
    return this.httpClient.get<Course[]>("http://localhost:3000/course");
  }

  getCourseById(id : number) : Observable<Course> {
    return this.httpClient.get<Course>("http://localhost:3000/course/"+id);
  }
}
