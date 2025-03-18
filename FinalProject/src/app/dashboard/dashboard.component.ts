import { Component } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChartComponent } from '../chart/chart.component';

interface MonthlyData {
  month: string;
  income: number;
  expense: number;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    ChartComponent,
    FormsModule,
    CommonModule,
    NgIf
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
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
      expense: this.currentExpense,
    });

    this.currentMonthIndex++;
    this.currentIncome = 0;
    this.currentExpense = 0;
  }

  scrollToTrackingSection() {
    const trackingSection = document.querySelector('.start-tracking-section');
    if (trackingSection) {
      trackingSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
