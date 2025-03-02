import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  imports: [CommonModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {

  // Toggle the visibility of the sign-up form
  showSignUpForm: boolean = false;

  // Funksioni për të hapur/mbyllur formularin
  toggleSignUpForm(): void {
    this.showSignUpForm = !this.showSignUpForm;
  }

  // Funksioni për të dërguar formularin
  onSubmit(): void {
    const username = (document.getElementById('username') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const password = (document.getElementById('password') as HTMLInputElement).value;

    console.log('Form Submitted:', { username, email, password });

    // Mund ta mbyllim formularin pas dërgimit
    this.toggleSignUpForm();
  }
}
