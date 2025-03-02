// social-security.component.ts
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface Employee {
  name: string;
  salary: number;
  employeeSocialSecurity: number;
  employeeHealthInsurance: number;
  employerSocialSecurity: number;
  employerHealthInsurance: number;
  totalEmployeeContribution: number;
  totalEmployerContribution: number;
}

@Component({
  selector: 'app-social-security',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './sigurimet-calculator.component.html',
  styleUrls: ['./sigurimet-calculator.component.scss']
})
export class SocialSecurityComponent {
  employees: Employee[] = [{ 
    name: '', 
    salary: 0, 
    employeeSocialSecurity: 0, 
    employeeHealthInsurance: 0, 
    employerSocialSecurity: 0,
    employerHealthInsurance: 0,
    totalEmployeeContribution: 0,
    totalEmployerContribution: 0
  }];

  totalEmployerContribution: number = 0;
  totalEmployeeContribution: number = 0;

  addEmployee() {
    this.employees.push({ 
      name: '', 
      salary: 0, 
      employeeSocialSecurity: 0, 
      employeeHealthInsurance: 0, 
      employerSocialSecurity: 0,
      employerHealthInsurance: 0,
      totalEmployeeContribution: 0,
      totalEmployerContribution: 0
    });
  }

  removeEmployee(index: number) {
    if (this.employees.length > 1) {
      this.employees.splice(index, 1);
      this.calculateTotals();
    }
  }

  calculateContributions(index: number) {
    const employee = this.employees[index];
    
    // Employee contributions (9.5% social security + 1.7% health insurance)
    employee.employeeSocialSecurity = employee.salary * 0.095;
    employee.employeeHealthInsurance = employee.salary * 0.017;
    employee.totalEmployeeContribution = employee.employeeSocialSecurity + employee.employeeHealthInsurance;
    
    // Employer contributions (15% social security + 1.7% health insurance)
    employee.employerSocialSecurity = employee.salary * 0.15;
    employee.employerHealthInsurance = employee.salary * 0.017;
    employee.totalEmployerContribution = employee.employerSocialSecurity + employee.employerHealthInsurance;
    
    this.calculateTotals();
  }

  calculateTotals() {
    this.totalEmployeeContribution = this.employees.reduce((sum, emp) => sum + emp.totalEmployeeContribution, 0);
    this.totalEmployerContribution = this.employees.reduce((sum, emp) => sum + emp.totalEmployerContribution, 0);
  }
}