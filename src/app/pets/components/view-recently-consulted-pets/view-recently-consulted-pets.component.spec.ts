import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRecentlyConsultedPetsComponent } from './view-recently-consulted-pets.component';

describe('ViewRecentlyConsultedPetsComponent', () => {
  let component: ViewRecentlyConsultedPetsComponent;
  let fixture: ComponentFixture<ViewRecentlyConsultedPetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewRecentlyConsultedPetsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewRecentlyConsultedPetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
