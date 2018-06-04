import { Component, OnInit, Input,ViewChild } from '@angular/core';
import { TestServiceService } from '../test-service.service';
import { Router } from '@angular/router';
import {CreateNewAutocompleteGroup, SelectedAutocompleteItem, NgAutocompleteComponent} from "ng-auto-complete";

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
@ViewChild(NgAutocompleteComponent) public completer: NgAutocompleteComponent;
 
public group = [
        CreateNewAutocompleteGroup(
            'Search / choose in / from list',
            'completer',
            [
                {title: 'Option 1', id: '1'},
                {title: 'Option 2', id: '2'},
                {title: 'Option 3', id: '3'},
                {title: 'Option 4', id: '4'},
                {title: 'Option 5', id: '5'},
            ],
            {titleKey: 'title', childrenKey: null}
        ),
    ];
Selected(item: SelectedAutocompleteItem) {
        console.log(item);
    }
    
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
