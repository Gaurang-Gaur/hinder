import { Routes } from '@angular/router';
import { ErrorComponent } from './shared/components/error/error.component.js';
import { LoginComponent } from './features/login/login.component.js';
import { DashboardComponent } from './features/dashboard/dashboard.component.js';
export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '**', component: ErrorComponent },
];
