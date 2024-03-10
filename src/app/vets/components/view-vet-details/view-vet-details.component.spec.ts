import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewVetDetailsComponent } from './view-vet-details.component';

describe('ViewVetDetailsComponent', () => {
  let component: ViewVetDetailsComponent;
  let fixture: ComponentFixture<ViewVetDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewVetDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewVetDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
