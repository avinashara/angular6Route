import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TestHeaderComponent } from './test-header/test-header.component';
import { TestSummaryComponent } from './test-summary/test-summary.component';
import { TestHomeComponent } from './test-home/test-home.component';

@NgModule({
  declarations: [
    AppComponent,
    TestHeaderComponent,
    TestSummaryComponent,
    TestHomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
