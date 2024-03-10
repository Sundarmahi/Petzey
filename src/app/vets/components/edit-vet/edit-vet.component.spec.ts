import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditVetComponent } from './edit-vet.component';

describe('EditVetComponent', () => {
  let component: EditVetComponent;
  let fixture: ComponentFixture<EditVetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditVetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditVetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
