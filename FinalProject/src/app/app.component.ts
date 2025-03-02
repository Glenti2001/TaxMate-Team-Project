import { Component } from '@angular/core';
import { CalculatorComponent } from './calculator/calculator.component';

@Component({
  selector: 'app-root',
  standalone: true, // Mark AppComponent as standalone
  imports: [CalculatorComponent], // Import CalculatorComponent here
  template: `
    <app-calculator></app-calculator>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FinalProject';
}