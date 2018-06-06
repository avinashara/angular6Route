import { Component } from '@angular/core';
import { TestServiceService } from '../test-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test-summary',
  templateUrl: './test-summary.component.html',
  styleUrls: ['./test-summary.component.css']
})
export class TestSummaryComponent {
  rows: any;
  skills: any = null;
  src: any = null;
  city: any = null;
  constructor(private service: TestServiceService, private route: Router) {
    this.rows = service.getSummary();
    let crData = service.getUserData();
    this.skills = crData.skills;
    this.src = crData.src;
    this.city = crData.city;
  }
  change() {
    this.route.navigateByUrl('/home');
  }
}
