import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./core/pages/landing-page/landing-page.component').then(
        (m) => m.LandingPageComponent
      ),
  },
  {
    path: '**',
    loadComponent: () =>
      import('./core/pages/landing-page/landing-page.component').then(
        (m) => m.LandingPageComponent
      ),
  },
];
