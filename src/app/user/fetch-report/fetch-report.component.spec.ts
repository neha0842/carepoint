import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchReportComponent } from './fetch-report.component';

describe('FetchReportComponent', () => {
  let component: FetchReportComponent;
  let fixture: ComponentFixture<FetchReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FetchReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FetchReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
