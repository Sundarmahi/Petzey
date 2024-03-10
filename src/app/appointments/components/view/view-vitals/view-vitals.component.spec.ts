import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VitalsSymptomsComponent } from './view-vitals.component';


describe('VitalsSymptomsComponent', () => {
  let component: VitalsSymptomsComponent;
  let fixture: ComponentFixture<VitalsSymptomsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VitalsSymptomsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VitalsSymptomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
