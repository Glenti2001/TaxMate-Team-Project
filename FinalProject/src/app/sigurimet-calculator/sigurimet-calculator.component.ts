import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sigurimet-calculator',
  standalone: true, 
  imports: [CommonModule, FormsModule], 
  templateUrl: './sigurimet-calculator.component.html',
  styleUrls: ['./sigurimet-calculator.component.scss']
})
export class SigurimetCalculatorComponent {
  grossSalary = 0;
  numberOfEmployees = 1;
  
  employeeContributionSocial = 9.5; 
  employeeContributionHealth = 1.7; 
  employerContributionSocial = 15.0; 
  employerContributionHealth = 1.7; 
  
  totalEmployeeContribution = 0;
  totalEmployerContribution = 0;
  totalContribution = 0;
  netSalary = 0;
  
  constructor() { }
  
  calculateContributions() {
    const employeeSocialAmount = (this.grossSalary * this.employeeContributionSocial) / 100;
    const employeeHealthAmount = (this.grossSalary * this.employeeContributionHealth) / 100;
    this.totalEmployeeContribution = employeeSocialAmount + employeeHealthAmount;
    
    const employerSocialAmount = (this.grossSalary * this.employerContributionSocial) / 100;
    const employerHealthAmount = (this.grossSalary * this.employerContributionHealth) / 100;
    this.totalEmployerContribution = employerSocialAmount + employerHealthAmount;
    
    this.totalContribution = this.totalEmployeeContribution + this.totalEmployerContribution;
    
    this.netSalary = this.grossSalary - this.totalEmployeeContribution;
    
    
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