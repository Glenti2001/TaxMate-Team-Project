import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TAPCalculatorComponent } from './tap-calculator.component';

describe('TAPCalculatorComponent', () => {
  let component: TAPCalculatorComponent;
  let fixture: ComponentFixture<TAPCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TAPCalculatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TAPCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
