import { Routes } from '@angular/router';
import { ErrorComponent } from './shared/components/error/error.component.js';
import { LoginComponent } from './features/login/login.component.js';
export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: '*', component: ErrorComponent },
];
