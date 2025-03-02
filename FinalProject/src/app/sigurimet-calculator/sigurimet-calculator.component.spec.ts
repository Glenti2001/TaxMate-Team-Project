import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigurimetCalculatorComponent } from './sigurimet-calculator.component';

describe('SigurimetCalculatorComponent', () => {
  let component: SigurimetCalculatorComponent;
  let fixture: ComponentFixture<SigurimetCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SigurimetCalculatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SigurimetCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
