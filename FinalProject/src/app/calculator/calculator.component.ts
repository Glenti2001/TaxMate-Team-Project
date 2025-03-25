import { Component } from '@angular/core';
import { TatimiCalculatorComponent } from '../tatimi-calculator/tatimi-calculator.component';
import { TvshCalculatorComponent } from '../tvsh-calculator/tvsh-calculator.component';
import { SigurimetCalculatorComponent } from '../sigurimet-calculator/sigurimet-calculator.component';
import { TapCalculatorComponent } from '../tap-calculator/tap-calculator.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-calculator',
  imports: [TapCalculatorComponent, SigurimetCalculatorComponent,
    TvshCalculatorComponent, TatimiCalculatorComponent, CommonModule],
  standalone: true,
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.scss'
})
export class CalculatorComponent {
  title = 'Sistemi i Llogaritjes së Taksave në Shqipëri';
  activeComponent: string = 'tvsh-calculator';

  setActiveComponent(componentName: string) {
    this.activeComponent = componentName;
  }
}