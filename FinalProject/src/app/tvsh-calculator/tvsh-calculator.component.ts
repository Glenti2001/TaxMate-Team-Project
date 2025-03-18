import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tvsh-calculator', 
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './tvsh-calculator.component.html',
  styleUrls: ['./tvsh-calculator.component.scss']
})
export class TvshCalculatorComponent {
  tvshTypes = [
    { id: 'normal', name: 'TVSH Normale (20%)', rate: 0.20 },
    { id: 'agriculture', name: 'TVSH në bujqësi (6%)', rate: 0.06 }
  ];
  
  selectedTvshType = this.tvshTypes[0];
  baseAmount = 100000;
  tvshAmount = 0;
  tvshPercentage = 0;
  totalAmount = 0;

  constructor() {
    this.calculateTvsh();
  }

  onTvshTypeChange(tvshTypeId: string) {
    this.selectedTvshType = this.tvshTypes.find(type => type.id === tvshTypeId) || this.tvshTypes[0];
    this.calculateTvsh();
  }

  calculateTvsh() {
    this.tvshPercentage = this.selectedTvshType.rate * 100;
    this.tvshAmount = this.baseAmount * this.selectedTvshType.rate;
    this.totalAmount = this.baseAmount + this.tvshAmount;
  }

  resetForm() {
    this.baseAmount = 0;
    this.selectedTvshType = this.tvshTypes[0];
    this.calculateTvsh();
  }
}
