// business-income-tax.component.ts
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-business-income-tax',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './tatimi-calculator.component.html',
  styleUrls: ['./tatimi-calculator.component.css']
})
export class BusinessIncomeTaxComponent {
  businessType: string = 'small';
  revenue: number = 0;
  profit: number = 0;
  tax: number = 0;
  taxRate: number = 0;

  calculateTax() {
    if (this.businessType === 'small') {
      // Small business tax calculation
      if (this.revenue <= 8000000) {
        this.tax = 0;
        this.taxRate = 0;
      } else if (this.revenue <= 14000000) {
        this.tax = (this.revenue - 8000000) * 0.05;
        this.taxRate = 5;
      }
    } else {
      // Large business tax calculation (15% on profit)
      this.tax = this.profit * 0.15;
      this.taxRate = 15;
    }
  }
}