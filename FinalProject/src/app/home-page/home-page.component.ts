import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home-page',
  imports: [FormsModule,CommonModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  isSignUpVisible = false;
  username: string = '';
  email: string = '';
  password: string = '';

  // Function to show the sign-up form
  showSignUpForm() {
    this.isSignUpVisible = true;
  }

  // Function to handle form submission
  onSubmit() {
    // Process the form data
    console.log('Form Submitted!', this.username, this.email, this.password);

    // Optionally reset the form and hide the sign-up form after submission
    this.isSignUpVisible = false;
    this.username = '';
    this.email = '';
    this.password = '';
  }
  isMenuOpen = false; // Variabla për të menaxhuar gjendjen e menusë

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen; // Këtu aktivizohet ose mbyllet menyja
  }
}