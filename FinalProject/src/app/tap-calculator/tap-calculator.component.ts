import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tap-calculator',
  standalone: true, // Mark as standalone
  imports: [CommonModule, FormsModule], // Import required modules
  templateUrl: './tap-calculator.component.html',
  styleUrls: ['./tap-calculator.component.scss']
})
export class TapCalculatorComponent {
  grossSalary = 0;
  socialSecurityContribution = 0;
  
  // Tax brackets
  readonly taxBracket1 = 30000; // 0% up to 30,000 LEK
  readonly taxBracket2 = 150000; // 13% from 30,000 to 150,000 LEK
  readonly taxRate1 = 0; // 0% for first bracket
  readonly taxRate2 = 13; // 13% for second bracket
  readonly taxRate3 = 23; // 23% for amount above 150,000 LEK
  
  // Results
  taxableIncome = 0;
  incomeTax = 0;
  netSalary = 0;
  effectiveTaxRate = 0;
  
  // Detailed breakdown
  bracket1Amount = 0;
  bracket1Tax = 0;
  bracket2Amount = 0;
  bracket2Tax = 0;
  bracket3Amount = 0;
  bracket3Tax = 0;

  constructor() { }
  
  calculateTax() {
    // Calculate taxable income (after social security contribution)
    this.taxableIncome = this.grossSalary - this.socialSecurityContribution;
    
    // Reset tax amounts
    this.bracket1Amount = 0;
    this.bracket1Tax = 0;
    this.bracket2Amount = 0;
    this.bracket2Tax = 0;
    this.bracket3Amount = 0;
    this.bracket3Tax = 0;
    
    // Calculate tax for first bracket (0% up to 30,000)
    this.bracket1Amount = Math.min(this.taxBracket1, this.taxableIncome);
    this.bracket1Tax = this.bracket1Amount * (this.taxRate1 / 100);
    
    // Calculate tax for second bracket (13% from 30,000 to 150,000)
    if (this.taxableIncome > this.taxBracket1) {
      this.bracket2Amount = Math.min(this.taxBracket2 - this.taxBracket1, this.taxableIncome - this.taxBracket1);
      this.bracket2Tax = this.bracket2Amount * (this.taxRate2 / 100);
    }
    
    // Calculate tax for third bracket (23% above 150,000)
    if (this.taxableIncome > this.taxBracket2) {
      this.bracket3Amount = this.taxableIncome - this.taxBracket2;
      this.bracket3Tax = this.bracket3Amount * (this.taxRate3 / 100);
    }
    
    // Calculate total income tax
    this.incomeTax = this.bracket1Tax + this.bracket2Tax + this.bracket3Tax;
    
    // Calculate net salary
    this.netSalary = this.taxableIncome - this.incomeTax;
    
    // Calculate effective tax rate
    this.effectiveTaxRate = this.taxableIncome > 0 ? (this.incomeTax / this.taxableIncome) * 100 : 0;
  }
  
  calculateSocialContribution() {
    // Auto-calculate social security contribution if not manually entered
    // Default value is 11.2% (9.5% + 1.7%) of gross salary
    if (!this.socialSecurityContribution) {
      this.socialSecurityContribution = this.grossSalary * 0.112;
    }
    this.calculateTax();
  }
  
  resetForm() {
    this.grossSalary = 0;
    this.socialSecurityContribution = 0;
    this.taxableIncome = 0;
    this.incomeTax = 0;
    this.netSalary = 0;
    this.effectiveTaxRate = 0;
    this.bracket1Amount = 0;
    this.bracket1Tax = 0;
    this.bracket2Amount = 0;
    this.bracket2Tax = 0;
    this.bracket3Amount = 0;
    this.bracket3Tax = 0;
  }
}