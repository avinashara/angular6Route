import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestSummaryComponent } from './test-summary/test-summary.component';
import { TestHomeComponent } from './test-home/test-home.component';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'summary', component: TestSummaryComponent },
    { path: 'home', component: TestHomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
