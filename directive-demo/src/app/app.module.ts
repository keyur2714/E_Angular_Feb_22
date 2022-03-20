import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyStyleDirective } from './my-style.directive';
import { TxtStyleDirective } from './txt-style.directive';
import { MyLoopDirective } from './my-loop.directive';
import { MyIfDirective } from './my-if.directive';

@NgModule({
  declarations: [
    AppComponent,
    MyStyleDirective,
    TxtStyleDirective,
    MyLoopDirective,
    MyIfDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
