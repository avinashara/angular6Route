import { Component, OnInit } from '@angular/core';
import {TestServiceService} from '../test-service.service';
 
@Component({
  selector: 'app-test-summary',
  templateUrl: './test-summary.component.html',
  styleUrls: ['./test-summary.component.css']
})
export class TestSummaryComponent implements OnInit {

  constructor(private service: TestServiceService ) { }

  ngOnInit() {
  }

}
