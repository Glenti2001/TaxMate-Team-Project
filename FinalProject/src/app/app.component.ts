import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculatorComponent } from './calculator/calculator.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomePageComponent } from './home-page/home-page.component';
import { DeadlinesComponent } from './deadline/deadline.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, RouterOutlet, Router, Event, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HomePageComponent,
    CalculatorComponent,
    RouterOutlet,
    DashboardComponent,
    RouterModule,
    DeadlinesComponent,
    FormsModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(private router: Router) {
    // Subscribe to router events for debugging
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        console.log('Navigation Start:', event);
      }
      if (event instanceof NavigationEnd) {
        console.log('Navigation End:', event);
      }
      if (event instanceof NavigationCancel) {
        console.log('Navigation Cancel:', event);
      }
      if (event instanceof NavigationError) {
        console.log('Navigation Error:', event);
      }
    });
  }
}