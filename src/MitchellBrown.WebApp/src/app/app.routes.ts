import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    component: () => import('./pages').then(m => m.HomeComponent)
  }
];
