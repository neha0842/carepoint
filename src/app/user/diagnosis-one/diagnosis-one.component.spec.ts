import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagnosisOneComponent } from './diagnosis-one.component';

describe('DiagnosisOneComponent', () => {
  let component: DiagnosisOneComponent;
  let fixture: ComponentFixture<DiagnosisOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiagnosisOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagnosisOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
