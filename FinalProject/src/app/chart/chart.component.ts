import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgChartsModule } from 'ng2-charts';
import { ChartConfiguration, ChartOptions } from 'chart.js';

interface MonthlyData {
  month: string;
  income: number;
  expense: number;
}

@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [CommonModule, NgChartsModule],
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnChanges {
  @Input() data: MonthlyData[] = [];
  
  incomeChartData: ChartConfiguration<'line'>['data'] = {
    labels: [],
    datasets: [
      {
        data: [],
        label: 'Income',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        pointBackgroundColor: 'rgba(75, 192, 192, 1)',
        pointBorderColor: '#fff',
        tension: 0.1
      }
    ]
  };
  
  expenseChartData: ChartConfiguration<'line'>['data'] = {
    labels: [],
    datasets: [
      {
        data: [],
        label: 'Expenses',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        pointBackgroundColor: 'rgba(255, 99, 132, 1)',
        pointBorderColor: '#fff',
        tension: 0.1
      }
    ]
  };
  
  chartOptions: ChartOptions = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };
  
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data'] && this.data.length > 0) {
      this.updateChartData();
    }
  }
  
  updateChartData(): void {
    const months = this.data.map(item => item.month);
    const incomeValues = this.data.map(item => item.income);
    const expenseValues = this.data.map(item => item.expense);
    
    this.incomeChartData.labels = months;
    this.incomeChartData.datasets[0].data = incomeValues;
    
    this.expenseChartData.labels = months;
    this.expenseChartData.datasets[0].data = expenseValues;
  }
}