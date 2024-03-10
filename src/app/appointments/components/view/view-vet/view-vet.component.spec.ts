import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewVetComponent } from './view-vet.component';

describe('ViewVetComponent', () => {
  let component: ViewVetComponent;
  let fixture: ComponentFixture<ViewVetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewVetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewVetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
