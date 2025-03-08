import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sigurimet-calculator',
  standalone: true, // Mark as standalone
  imports: [CommonModule, FormsModule], // Import required modules
  templateUrl: './sigurimet-calculator.component.html',
  styleUrls: ['./sigurimet-calculator.component.scss']
})
export class SigurimetCalculatorComponent {
  grossSalary = 0;
  numberOfEmployees = 1;
  
  // Constants for rates
  employeeContributionSocial = 9.5; // 9.5% Sigurimet Shoqërore për punonjës
  employeeContributionHealth = 1.7; // 1.7% Sigurimet Shëndetësore për punonjës
  employerContributionSocial = 15.0; // 15% Sigurimet Shoqërore për punëdhënës
  employerContributionHealth = 1.7; // 1.7% Sigurimet Shëndetësore për punëdhënës
  
  // Results
  totalEmployeeContribution = 0;
  totalEmployerContribution = 0;
  totalContribution = 0;
  netSalary = 0;
  
  constructor() { }
  
  calculateContributions() {
    // Employee contributions
    const employeeSocialAmount = (this.grossSalary * this.employeeContributionSocial) / 100;
    const employeeHealthAmount = (this.grossSalary * this.employeeContributionHealth) / 100;
    this.totalEmployeeContribution = employeeSocialAmount + employeeHealthAmount;
    
    // Employer contributions
    const employerSocialAmount = (this.grossSalary * this.employerContributionSocial) / 100;
    const employerHealthAmount = (this.grossSalary * this.employerContributionHealth) / 100;
    this.totalEmployerContribution = employerSocialAmount + employerHealthAmount;
    
    // Total contributions
    this.totalContribution = this.totalEmployeeContribution + this.totalEmployerContribution;
    
    // Net salary (before income tax)
    this.netSalary = this.grossSalary - this.totalEmployeeContribution;
    
    // Multiply by number of employees
    if (this.numberOfEmployees > 1) {
      this.totalEmployeeContribution *= this.numberOfEmployees;
      this.totalEmployerContribution *= this.numberOfEmployees;
      this.totalContribution *= this.numberOfEmployees;
    }
  }
  
  resetForm() {
    this.grossSalary = 0;
    this.numberOfEmployees = 1;
    this.totalEmployeeContribution = 0;
    this.totalEmployerContribution = 0;
    this.totalContribution = 0;
    this.netSalary = 0;
  }
}