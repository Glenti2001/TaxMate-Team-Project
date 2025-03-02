import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TatimiCalculatorComponent } from './tatimi-calculator.component';

describe('TatimiCalculatorComponent', () => {
  let component: TatimiCalculatorComponent;
  let fixture: ComponentFixture<TatimiCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TatimiCalculatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TatimiCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
