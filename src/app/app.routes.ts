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
    path: 'netz-service-portal',
    loadComponent: () =>
      import('./core/pages/service-portal/service-portal.component').then((m) => m.ServicePortalComponent),
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./core/pages/service-dashboard/service-dashboard.component').then((m) => m.ServiceDashboardComponent),
  },
  {
    path: 'planauskunft',
    loadComponent: () =>
      import('./core/pages/plan/plan.component').then((m) => m.PlanComponent),
  },
  {
    path: '**',
    loadComponent: () =>
      import('./core/pages/landing-page/landing-page.component').then(
        (m) => m.LandingPageComponent
      ),
  },
];
