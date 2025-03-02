// vat.component.ts
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vat',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './tvsh-calculator.component.html',
  styleUrls: ['./tvsh-calculator.component.scss']
})
export class VatComponent {
  vatType: string = 'standard';
  amount: number = 0;
  vatAmount: number = 0;
  totalAmount: number = 0;
  vatRate: number = 20;

  calculateVAT() {
    this.vatRate = this.vatType === 'standard' ? 20 : 6;
    this.vatAmount = this.amount * (this.vatRate / 100);
    this.totalAmount = this.amount + this.vatAmount;
  }
}