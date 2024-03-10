import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetsNewappointComponent } from './pets-newappoint.component';

describe('PetsNewappointComponent', () => {
  let component: PetsNewappointComponent;
  let fixture: ComponentFixture<PetsNewappointComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PetsNewappointComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PetsNewappointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
