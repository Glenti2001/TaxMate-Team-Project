// tatimi-calculator.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tatimi-calculator',
  standalone: true, // Mark as standalone
  imports: [CommonModule, FormsModule], // Import required modules
  templateUrl: './tatimi-calculator.component.html',
  styleUrls: ['./tatimi-calculator.component.scss']
})
export class TatimiCalculatorComponent {
  businessTypes = [
    { id: 'small', name: 'Biznes i Vogël' },
    { id: 'large', name: 'Biznes i Madh' }
  ];
  
  selectedBusinessType = this.businessTypes[0];
  revenue = 0; // Xhiro
  profit = 0;  // Fitimi (për biznesin e madh)
  
  // Results
  taxRate = 0;
  taxAmount = 0;
  
  constructor() { }
  
  calculateTax() {
    if (this.selectedBusinessType.id === 'small') {
      // Biznes i vogël
      if (this.revenue <= 8000000) {
        this.taxRate = 0;
        this.taxAmount = 0;
      } else if (this.revenue <= 14000000) {
        this.taxRate = 5;
        this.taxAmount = this.revenue * 0.05;
      } else {
        // If revenue exceeds 14 million, it's technically not a small business
        this.taxRate = 5;
        this.taxAmount = this.revenue * 0.05;
      }
    } else {
      // Biznes i madh (15% mbi fitimin)
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