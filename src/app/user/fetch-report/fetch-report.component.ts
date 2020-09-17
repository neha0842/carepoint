import { Component, OnInit } from '@angular/core';
import { CareService } from 'src/app/services/care.service';

@Component({
  selector: 'app-fetch-report',
  templateUrl: './fetch-report.component.html',
  styleUrls: ['./fetch-report.component.css']
})
export class FetchReportComponent implements OnInit {
  tutorials: any;
  currentTutorial = null;
  currentIndex = -1;
  name = '';

  constructor(private CareService: CareService) { }

  ngOnInit(): void {
    this.retrieveTutorials();
  }

  retrieveTutorials(): void {
    this.CareService.getAll()
      .subscribe(
        data => {
          this.tutorials = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrieveTutorials();
    this.currentTutorial = null;
    this.currentIndex = -1;
  }

  setActiveTutorial(tutorial, index): void {
    this.currentTutorial = tutorial;
    this.currentIndex = index;
  }

  removeAllTutorials(): void {
    this.CareService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.retrieveTutorials();
        },
        error => {
          console.log(error);
        });
  }

  searchTitle(): void {
    this.CareService.findByTitle(this.name)
      .subscribe(
        data => {
          this.tutorials = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

}
