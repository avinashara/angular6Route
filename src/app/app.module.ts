import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  FormsModule } from '@angular/forms';
import { RouterModule, Routes  } from '@angular/router';
import { NgAutoCompleteModule } from 'ng-auto-complete';

import { AppComponent } from './app.component';
import { TestHeaderComponent } from './test-header/test-header.component';
import { TestSummaryComponent } from './test-summary/test-summary.component';
import { TestHomeComponent } from './test-home/test-home.component';
import { AppRoutingModule } from './/app-routing.module';
import {TestServiceService } from './/test-service.service';

@NgModule({
  declarations: [
    AppComponent,
    TestHeaderComponent,
    TestSummaryComponent,
    TestHomeComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    NgAutoCompleteModule
  ],
  providers: [TestServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
