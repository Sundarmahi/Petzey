import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPetPetparentComponent } from './view-pet-petparent.component';

describe('ViewPetPetparentComponent', () => {
  let component: ViewPetPetparentComponent;
  let fixture: ComponentFixture<ViewPetPetparentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewPetPetparentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewPetPetparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
