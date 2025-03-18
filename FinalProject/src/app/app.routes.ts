import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DeadlinesComponent } from './deadline/deadline.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'calculator', component: CalculatorComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'deadline', component: DeadlinesComponent },
];
