import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tap-calculator',
  standalone: true, 
  imports: [CommonModule, FormsModule], 
  templateUrl: './tap-calculator.component.html',
  styleUrls: ['./tap-calculator.component.scss']
})
export class TapCalculatorComponent {
  grossSalary = 0;
  socialSecurityContribution = 0;
  
  readonly taxBracket1 = 30000; 
  readonly taxBracket2 = 150000; 
  readonly taxRate1 = 0; 
  readonly taxRate2 = 13; 
  readonly taxRate3 = 23; 

  taxableIncome = 0;
  incomeTax = 0;
  netSalary = 0;
  effectiveTaxRate = 0;

  bracket1Amount = 0;
  bracket1Tax = 0;
  bracket2Amount = 0;
  bracket2Tax = 0;
  bracket3Amount = 0;
  bracket3Tax = 0;

  constructor() { }
  
  calculateTax() {
    this.taxableIncome = this.grossSalary - this.socialSecurityContribution;
    
    this.bracket1Amount = 0;
    this.bracket1Tax = 0;
    this.bracket2Amount = 0;
    this.bracket2Tax = 0;
    this.bracket3Amount = 0;
    this.bracket3Tax = 0;
    
    this.bracket1Amount = Math.min(this.taxBracket1, this.taxableIncome);
    this.bracket1Tax = this.bracket1Amount * (this.taxRate1 / 100);
    
    if (this.taxableIncome > this.taxBracket1) {
      this.bracket2Amount = Math.min(this.taxBracket2 - this.taxBracket1, this.taxableIncome - this.taxBracket1);
      this.bracket2Tax = this.bracket2Amount * (this.taxRate2 / 100);
    }
    
    if (this.taxableIncome > this.taxBracket2) {
      this.bracket3Amount = this.taxableIncome - this.taxBracket2;
      this.bracket3Tax = this.bracket3Amount * (this.taxRate3 / 100);
    }
    
    this.incomeTax = this.bracket1Tax + this.bracket2Tax + this.bracket3Tax;
    
    this.netSalary = this.taxableIncome - this.incomeTax;
    
    this.effectiveTaxRate = this.taxableIncome > 0 ? (this.incomeTax / this.taxableIncome) * 100 : 0;
  }
  
  calculateSocialContribution() {

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