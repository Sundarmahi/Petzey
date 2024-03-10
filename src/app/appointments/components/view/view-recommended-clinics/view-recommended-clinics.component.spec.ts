import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRecommendedClinicsComponent } from './view-recommended-clinics.component';

describe('ViewRecommendedClinicsComponent', () => {
  let component: ViewRecommendedClinicsComponent;
  let fixture: ComponentFixture<ViewRecommendedClinicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewRecommendedClinicsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewRecommendedClinicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
