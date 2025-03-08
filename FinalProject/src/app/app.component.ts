import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TatimiCalculatorComponent } from './tatimi-calculator/tatimi-calculator.component';
import { TvshCalculatorComponent } from './tvsh-calculator/tvsh-calculator.component';
import { SigurimetCalculatorComponent } from './sigurimet-calculator/sigurimet-calculator.component';
import { TapCalculatorComponent } from './tap-calculator/tap-calculator.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    TatimiCalculatorComponent,
    TvshCalculatorComponent,
    SigurimetCalculatorComponent,
    TapCalculatorComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Llogaritës i Tatimeve dhe Sigurimeve - Shqipëri';
  activeComponent: string = 'tvsh-calculator'; // Default component

  setActiveComponent(component: string) {
    this.activeComponent = component;
  }
}
