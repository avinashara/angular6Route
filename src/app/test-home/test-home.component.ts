import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { TestServiceService } from '../test-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test-home',
  templateUrl: './test-home.component.html',
  styleUrls: ['./test-home.component.css']
})
export class TestHomeComponent implements OnInit {
  skillArray
  sourceArray
  cityArray
  @Input() skills;
  @Input() source;
  @Input() city;
  tags = [];

  constructor(private service: TestServiceService, private router: Router) { }

  ngOnInit() {
    this.sourceArray = this.service.getSource();
    this.skillArray = this.service.getSkills();
    this.cityArray = this.service.getCity();
  }
  submit() {
    this.service.setUserData(this.skills, this.source, this.city);
    this.router.navigateByUrl('/summary');
  }
}
