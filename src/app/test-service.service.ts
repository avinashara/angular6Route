import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestServiceService {
  source: ['linkedin', 'github', 'naukri', 'shine', 'career portal'];
  city: ['bangalore', 'kolkata', 'New Delhi', 'noida', 'hyderabad', 'pune'];
  skills: ['angularjs', 'html', 'css3', 'json', 'restapi'];
  data: [
    {
      id: 1
      , name: 'User 1'
      , source: 'linkedin'
      , city: 'bangalore'
      , skills: ['angularjs', 'html']
    }, {
      id: 2
      , name: 'User 2'
      , source: 'naukri'
      , city: 'pune'
      , skills: ['angularjs', 'html']
    }, {
      id: 3
      , name: 'User 3'
      , source: 'naukri'
      , city: 'bangalore'
      , skills: ['angularjs', 'html']
    }, {
      id: 4
      , name: 'User 4'
      , source: 'linkedin'
      , city: 'New Delhi'
      , skills: ['angularjs', 'html']
    }, {
      id: 5
      , name: 'User 5'
      , source: 'shine'
      , city: 'hyderabad'
      , skills: ['angularjs', 'html']
    }, {
      id: 6
      , name: 'User 6'
      , source: 'career portal'
      , city: 'kolkata'
      , skills: ['angularjs', 'html']
    }, {
      id: 7
      , name: 'User 7'
      , source: 'github'
      , city: 'bangalore'
      , skills: ['angularjs', 'html']
    }, {
      id: 8
      , name: 'User 8'
      , source: 'linkedin'
      , city: 'noida'
      , skills: ['angularjs', 'html']
    }
  ];
  getSource() {
    return Object.assign({}, this.source);
  };
  getCity() {
    return Object.assign({}, this.city);
  };
  getSkills() {
    return Object.assign({}, this.skills);
  }
  getData() {
    return Object.assign({}, this.data);
  }

  setUserData(skillSets, source, city) {
    localStorage.setItem('skillSets', JSON.stringify(skillSets));
    localStorage.setItem('source', JSON.stringify(source));
    localStorage.setItem('city', JSON.stringify(city));
  };
  getUserData() {
    return {
      skills: this.tranfromData(JSON.parse(localStorage.getItem('skillSets')))
      , src: this.tranfromData(JSON.parse(localStorage.getItem('source')))
      , city: this.tranfromData(JSON.parse(localStorage.getItem('city')))
    }
  }
  getSummary(data) {
    var filter = this.getUserData()
      , rows = [];
    this.getData().forEach(function (obj) {
      filter.skills.forEach(function (skill) {
        if (obj.skills.includes(skill.toLowerCase()) && filter.src.includes(obj.source.toLowerCase()) && filter.city.includes(obj.city.toLowerCase())) {
          let object = Object.assign({}, obj);
          Object.defineProperty(object, "skillSets", filter.skills.join(' & '));
          rows = rows.filter(function (o) {
            return o.id !== object.id;
          })
          rows.push(object);
        }
      })
    })
    return rows;
  };
  tranfromData(array) {
    var a = [];
    array.forEach(function (obj) {
      a.push(obj.text);
    });
    return a;
  }

}
