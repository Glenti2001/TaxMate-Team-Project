import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf, CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss'],
  standalone: true,
  imports: [FormsModule, NgIf, CurrencyPipe],
})
export class CalculatorComponent {
  // Model properties
  businessType: string = 'small'; // Default to small business
  revenue: number = 0; // Revenue for small business
  profit: number = 0; // Profit for large business
  taxType: string = 'normal'; // Default to normal VAT rate

  // Results object
  taxResults: {
    businessTax: number | undefined; // Business tax result
    baseAmount: number | undefined; // Base amount for VAT calculation
    vat: number | undefined; // Calculated VAT
    totalWithVAT: number | undefined; // Total amount including VAT
  } = {
    businessTax: undefined,
    baseAmount: undefined,
    vat: undefined,
    totalWithVAT: undefined,
  };

  /**
   * Calculate taxes based on inputs
   */
  calculateTaxes(): void {
    // Calculate business tax
    this.taxResults.businessTax = this.calculateBusinessTax();

    // Calculate VAT and related values
    this.taxResults.baseAmount = this.calculateBaseAmount();
    this.taxResults.vat = this.calculateVAT();
    this.taxResults.totalWithVAT = this.taxResults.baseAmount + this.taxResults.vat;
  }

  /**
   * Calculate business tax based on business type
   */
  private calculateBusinessTax(): number {
    if (this.businessType === 'small') {
      // Small business tax calculation (progressive rate based on revenue)
      if (this.revenue <= 5000000) {
        return this.revenue * 0.05; // 5% for revenue up to 5 million ALL
      } else if (this.revenue <= 14000000) {
        return this.revenue * 0.08; // 8% for revenue between 5-14 million ALL
      } else {
        return this.revenue * 0.1; // 10% for revenue above 14 million ALL
      }
    } else {
      // Large business tax calculation (based on profit)
      return this.profit * 0.15; // 15% profit tax for larger businesses
    }
  }

  /**
   * Calculate the base amount for VAT
   */
  private calculateBaseAmount(): number {
    return this.businessType === 'small' ? this.revenue : this.profit;
  }

  /**
   * Calculate VAT based on tax type
   */
  private calculateVAT(): number {
    const baseAmount = this.calculateBaseAmount();

    if (this.taxType === 'normal') {
      return baseAmount * 0.2; // 20% standard VAT rate
    } else {
      return baseAmount * 0.06; // 6% reduced VAT rate for agriculture
    }
  }
}