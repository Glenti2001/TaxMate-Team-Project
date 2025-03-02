import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusinessIncomeTaxComponent } from './tatimi-calculator/tatimi-calculator.component';
import { VatComponent } from './tvsh-calculator/tvsh-calculator.component';
import { SocialSecurityComponent } from './sigurimet-calculator/sigurimet-calculator.component';
import { IncomeTaxComponent } from './tap-calculator/tap-calculator.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    BusinessIncomeTaxComponent,
    VatComponent,
    SocialSecurityComponent,
    IncomeTaxComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sistemi i Llogaritjes së Taksave në Shqipëri';
}
