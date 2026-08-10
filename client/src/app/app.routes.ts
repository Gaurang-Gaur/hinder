import { Routes } from '@angular/router';
import { ErrorComponent } from './shared/components/error/error.component.js';

export const routes: Routes = [{ path: '*', component: ErrorComponent }];
