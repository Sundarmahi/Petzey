import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetsLandingPageComponent } from './pets-landing-page.component';

describe('PetsLandingPageComponent', () => {
  let component: PetsLandingPageComponent;
  let fixture: ComponentFixture<PetsLandingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PetsLandingPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PetsLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
