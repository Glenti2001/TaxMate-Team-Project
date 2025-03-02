import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvshCalculatorComponent } from './tvsh-calculator.component';

describe('TvshCalculatorComponent', () => {
  let component: TvshCalculatorComponent;
  let fixture: ComponentFixture<TvshCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TvshCalculatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TvshCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
