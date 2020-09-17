import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {CareService } from 'src/app/services/care.service';

@Component({
  selector: 'app-report-deatils',
  templateUrl: './report-deatils.component.html',
  styleUrls: ['./report-deatils.component.css']
})
export class ReportDeatilsComponent implements OnInit {
  currentTutorial = null;
  message = '';
  constructor(
    private careservice:CareService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.message = '';
    this.getTutorial(this.route.snapshot.paramMap.get('id'));
  }

  getTutorial(id): void {
    this.careservice.get(id)
      .subscribe(
        data => {
          this.currentTutorial = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updatePublished(status): void {
    const data = {
      name: this.currentTutorial.name,
      email: this.currentTutorial.email,
      age: this.currentTutorial.age,
      date: this.currentTutorial.date,
      mobile: this.currentTutorial.mobile,
      result: this.currentTutorial.result,
      published: status
    };

    this.careservice.update(this.currentTutorial.id, data)
      .subscribe(
        response => {
          this.currentTutorial.published = status;
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }

  updateTutorial(): void {
    this.careservice.update(this.currentTutorial.id, this.currentTutorial)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The report was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }

  deleteTutorial(): void {
    this.careservice.delete(this.currentTutorial.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/fetch-report']);
        },
        error => {
          console.log(error);
        });
  }

}
