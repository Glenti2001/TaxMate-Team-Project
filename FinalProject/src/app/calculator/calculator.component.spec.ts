import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TaxCalculatorComponent } from './calculator.component';

describe('CalculatorComponent', () => {
  let component: TaxCalculatorComponent;
  let fixture: ComponentFixture<TaxCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaxCalculatorComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TaxCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
