import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllVetsComponent } from './all-vets.component';

describe('AllVetsComponent', () => {
  let component: AllVetsComponent;
  let fixture: ComponentFixture<AllVetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllVetsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllVetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
