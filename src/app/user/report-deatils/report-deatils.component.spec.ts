import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportDeatilsComponent } from './report-deatils.component';

describe('ReportDeatilsComponent', () => {
  let component: ReportDeatilsComponent;
  let fixture: ComponentFixture<ReportDeatilsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportDeatilsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportDeatilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
