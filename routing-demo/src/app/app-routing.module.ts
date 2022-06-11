import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { CourseEntryComponent } from './course-entry/course-entry.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { ManageCourseComponent } from './manage-course/manage-course.component';

const routes: Routes = [
  {path : 'home',component : HomeComponent},
  {path : 'about-us',component : AboutUsComponent},
  {path : 'contact-us',component : ContactUsComponent},
  {
    path : 'dashboard',component : DashboardComponent,
    children : [
      {path : 'add-course',component : CourseEntryComponent},
      {path : 'update-course/:id',component : CourseEntryComponent},
      {path : 'manage-course',component : ManageCourseComponent},
      {path : 'course-detail/:id',component : CourseDetailComponent}
    ]
  },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  constructor(){
    console.log("App Routing Module Object Created...!");
  }
}
