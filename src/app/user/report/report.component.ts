import { Component, OnInit } from '@angular/core';
import {CareService} from 'src/app/services/care.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  report = {
    name:'',
    email:'',
    date:'',
    age:'',
    mobile:'',
    result:'',
  };
  submitted = false;

  constructor(private careservice: CareService ) { }

  ngOnInit(): void {
  }

  savereport(): void {
    const data = {
      name: this.report.name,
      email:this.report.email,
      date:this.report.date,
      age:this.report.age,
      mobile:this.report.mobile,
      result:this.report.result
    };

    this.careservice.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newTutorial(): void {
    this.submitted = false;
    this. report = {
      name:'',
      email:'',
      date:'',
      age:'',
      mobile:'',
      result:'',
    };
  }

}