import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from './course.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  appUrl : string = "http://localhost:3000/course";

  constructor(private httpClient : HttpClient) { }

  getAllCourses() : Observable<Course[]>{
    return this.httpClient.get<Course[]>(this.appUrl);
  }

  getCourseById(id : number) : Observable<Course> {
    alert(id);
    return this.httpClient.get<Course>(this.appUrl+"/"+id);
  }

  saveCourse(course : Course) : Observable<Course> {
    return this.httpClient.post<Course>(this.appUrl,course);
  }
}
