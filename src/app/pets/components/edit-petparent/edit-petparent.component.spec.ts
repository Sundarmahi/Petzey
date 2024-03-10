import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPetparentComponent } from './edit-petparent.component';

describe('EditPetparentComponent', () => {
  let component: EditPetparentComponent;
  let fixture: ComponentFixture<EditPetparentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditPetparentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditPetparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
