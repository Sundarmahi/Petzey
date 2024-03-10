import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRecommendedDoctorsComponent } from './view-recommended-doctors.component';

describe('ViewRecommendedDoctorsComponent', () => {
  let component: ViewRecommendedDoctorsComponent;
  let fixture: ComponentFixture<ViewRecommendedDoctorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewRecommendedDoctorsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewRecommendedDoctorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
