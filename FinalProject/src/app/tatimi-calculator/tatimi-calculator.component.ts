import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tatimi-calculator',
  standalone: true,
  imports: [CommonModule, FormsModule], 
  templateUrl: './tatimi-calculator.component.html',
  styleUrls: ['./tatimi-calculator.component.scss']
})
export class TatimiCalculatorComponent {
  businessTypes = [
    { id: 'small', name: 'Biznes i Vogël' },
    { id: 'large', name: 'Biznes i Madh' }
  ];
  
  selectedBusinessType = this.businessTypes[0];
  revenue = 0;
  profit = 0;  
  
  taxRate = 0;
  taxAmount = 0;
  
  constructor() { }
  
  calculateTax() {
    if (this.selectedBusinessType.id === 'small') {
      if (this.revenue <= 8000000) {
        this.taxRate = 0;
        this.taxAmount = 0;
      } else if (this.revenue <= 14000000) {
        this.taxRate = 5;
        this.taxAmount = this.revenue * 0.05;
      } else {
        this.taxRate = 5;
        this.taxAmount = this.revenue * 0.05;
      }
    } else {
      this.taxRate = 15;
      this.taxAmount = this.profit * 0.15;
    }
  }
  
  resetForm() {
    this.selectedBusinessType = this.businessTypes[0];
    this.revenue = 0;
    this.profit = 0;
    this.taxRate = 0;
    this.taxAmount = 0;
  }
}