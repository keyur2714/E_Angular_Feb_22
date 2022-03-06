import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MessageComponent } from './message/message.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { DeptListComponent } from './dept-list/dept-list.component';
import { MyDataGridComponent } from './my-data-grid/my-data-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    PersonalInfoComponent,
    EmployeeListComponent,
    DeptListComponent,
    MyDataGridComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
