import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CourseEntryComponent } from './course-entry/course-entry.component';

import { HomeComponent } from './home/home.component';
import { ManageCourseComponent } from './manage-course/manage-course.component';


const routes: Routes = [
  {path : 'home' , component : HomeComponent},
  {path : 'about-us' , component : AboutUsComponent},
  {path : 'contact-us' , component : ContactUsComponent},
  {path : 'manage-course', component : ManageCourseComponent},
  {path : 'add-course', component : CourseEntryComponent},
  {path : 'edit-course/:id', component : CourseEntryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
