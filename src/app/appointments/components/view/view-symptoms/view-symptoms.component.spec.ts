import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSymptomsComponent } from './view-symptoms.component';

describe('ViewSymptomsComponent', () => {
  let component: ViewSymptomsComponent;
  let fixture: ComponentFixture<ViewSymptomsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewSymptomsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewSymptomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
