import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { inspectionModule } from './inspection/inspection.module'
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    //Customer Modules
    inspectionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
