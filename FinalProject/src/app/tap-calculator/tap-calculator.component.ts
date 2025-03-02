// income-tax.component.ts
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-income-tax',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './tap-calculator.component.html',
  styleUrls: ['./tap-calculator.component.scss']
})
export class IncomeTaxComponent {
  grossSalary: number = 0;
  taxableIncome: number = 0;
  incomeTax: number = 0;
  netSalary: number = 0;
  
  // Social Security and Health Insurance rates for employee
  socialSecurityRate: number = 0.095; // 9.5%
  healthInsuranceRate: number = 0.017; // 1.7%
  
  // Tax brackets
  bracket1Limit: number = 30000;
  bracket2Limit: number = 150000;
  bracket1Rate: number = 0;
  bracket2Rate: number = 0.13;
  bracket3Rate: number = 0.23;

  // Contribution details
  socialSecurity: number = 0;
  healthInsurance: number = 0;
  totalContributions: number = 0;
  
  // Tax breakdown
  bracket1Tax: number = 0;
  bracket2Tax: number = 0;
  bracket3Tax: number = 0;

  calculateTax() {
    // Calculate social security and health insurance
    this.socialSecurity = this.grossSalary * this.socialSecurityRate;
    this.healthInsurance = this.grossSalary * this.healthInsuranceRate;
    this.totalContributions = this.socialSecurity + this.healthInsurance;
    
    // Calculate taxable income (gross salary - social security and health insurance)
    this.taxableIncome = this.grossSalary - this.totalContributions;
    
    // Calculate income tax based on progressive tax rates
    this.incomeTax = 0;
    this.bracket1Tax = 0;
    this.bracket2Tax = 0;
    this.bracket3Tax = 0;
    
    if (this.taxableIncome <= this.bracket1Limit) {
      // 0% for income up to 30,000 lekë
      this.bracket1Tax = 0;
    } else if (this.taxableIncome <= this.bracket2Limit) {
      // 0% for first 30,000 and 13% for income between 30,000 and 150,000 lekë
      this.bracket1Tax = 0;
      this.bracket2Tax = (this.taxableIncome - this.bracket1Limit) * this.bracket2Rate;
    } else {
      // 0% for first 30,000, 13% for income between 30,000 and 150,000, and 23% for income above 150,000 lekë
      this.bracket1Tax = 0;
      this.bracket2Tax = (this.bracket2Limit - this.bracket1Limit) * this.bracket2Rate;
      this.bracket3Tax = (this.taxableIncome - this.bracket2Limit) * this.bracket3Rate;
    }
    
    this.incomeTax = this.bracket1Tax + this.bracket2Tax + this.bracket3Tax;
    
    // Calculate net salary (taxable income - income tax)
    this.netSalary = this.taxableIncome - this.incomeTax;
  }
}