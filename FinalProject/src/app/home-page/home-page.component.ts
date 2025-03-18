import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { CalculatorComponent } from '../calculator/calculator.component';
import { RouterOutlet, Router, Routes } from "@angular/router";
import {MatToolbarModule} from '@angular/material/toolbar';
import { DeadlinesComponent } from '../deadline/deadline.component';

@Component({
  selector: 'app-home-page',
  imports: [FormsModule,CommonModule, DashboardComponent, CalculatorComponent, RouterOutlet, MatToolbarModule, DeadlinesComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  constructor(private router: Router) {
    this.router.resetConfig([
      { path: "", component: HomePageComponent },
      { path: "calculator", component: CalculatorComponent },
      { path: "dashboard", component: DashboardComponent },
      { path: "deadline", component: DeadlinesComponent },
      
    ]);}
    

 navigateTo(path: string) {
    this.router.navigateByUrl(path);
  }
}