import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { CourseService } from './course-service';
import { Course } from './course.model';


/**
 * @title Data table with sorting, pagination, and filtering.
 */
 @Component({
  selector: 'app-manage-course',
  templateUrl: './manage-course.component.html',
  styleUrls: ['./manage-course.component.css']
})
export class ManageCourseComponent implements AfterViewInit {
  displayedColumns: string[] = ['id', 'code', 'name', 'fees', 'trainerName','action'];
  dataSource: MatTableDataSource<Course> = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private courseService : CourseService) {
    this.getAllCourses();
  }

  getAllCourses() : void {
    this.courseService.getAllCourse().subscribe(
      (data)=>{
        this.dataSource.data = data;
      }
    )
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

