import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  language: string = 'en'; 
  
  setLanguage(lang: string) {
    this.language = lang; 
    console.log(`Language changed to: ${lang}`);
  }
}
