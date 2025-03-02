import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChartComponent } from './chart/chart.component';

interface MonthlyData {
  month: string;
  income: number;
  expense: number;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, ChartComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  months: string[] = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
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
}
