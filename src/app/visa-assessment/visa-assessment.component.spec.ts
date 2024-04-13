import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisaAssessmentComponent } from './visa-assessment.component';

describe('VisaAssessmentComponent', () => {
  let component: VisaAssessmentComponent;
  let fixture: ComponentFixture<VisaAssessmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisaAssessmentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VisaAssessmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
