import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChartComponent } from './chart/chart.component';
import { DeadlinesComponent } from './deadline/deadline.component';
interface MonthlyData {
  month: string;
  income: number;
  expense: number;
}
// import { BusinessIncomeTaxComponent } from './tatimi-calculator/tatimi-calculator.component';
// import { VatComponent } from './tvsh-calculator/tvsh-calculator.component';
// import { SocialSecurityComponent } from './sigurimet-calculator/sigurimet-calculator.component';
// import { IncomeTaxComponent } from './tap-calculator/tap-calculator.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, ChartComponent, DeadlinesComponent
    // BusinessIncomeTaxComponent,
    // VatComponent,
    // SocialSecurityComponent,
    // IncomeTaxComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // title = 'Sistemi i Llogaritjes së Taksave në Shqipëri';

  months: string[] = [
    'Janar', 'Shkurt', 'Mars', 'Prill', 'Maj', 'Qershor',
    'Korrik', 'Gusht', 'Shtator', 'Tetor', 'Nentor', 'Dhjetor'
  ];
  
  currentMonthIndex = 0;
  currentIncome = 0;
  currentExpense = 0;
  yearlyData: MonthlyData[] = [];

  
  
  saveMonthData(): void {

    this.yearlyData.push({
      month: this.months[this.currentMonthIndex],
      income: this.currentIncome,
      expense: this.currentExpense
    });

    this.currentMonthIndex++;

    this.currentIncome = 0;
    this.currentExpense = 0;
  }

  scrollToTrackingSection() {
    const trackingSection = document.querySelector('.start-tracking-section');
    if (trackingSection) {
      trackingSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  }
}


