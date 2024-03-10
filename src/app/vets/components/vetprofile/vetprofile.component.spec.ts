import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VetprofileComponent } from './vetprofile.component';

describe('VetprofileComponent', () => {
  let component: VetprofileComponent;
  let fixture: ComponentFixture<VetprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VetprofileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VetprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
