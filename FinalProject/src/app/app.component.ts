import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculatorComponent } from './calculator/calculator.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomePageComponent } from './home-page/home-page.component';
import { DeadlinesComponent } from './deadline/deadline.component';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { RouterOutlet } from '@angular/router';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HomePageComponent, CalculatorComponent,RouterOutlet, DashboardComponent, RouterModule, DeadlinesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent{
 
}