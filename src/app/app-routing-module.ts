import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicLayout } from './layout/public-layout/public-layout';

const routes: Routes = [
  {
    path: '',
    component: PublicLayout,
    children: [
      {
        path: '',
        loadChildren: () => import('../app/features/home/home-module').then((m) => m.HomeModule),
      },
      {
        path: 'privacy-policy',
        loadChildren: () =>
          import('../app/features/privacy-policy/privacy-policy-module').then(
            (m) => m.PrivacyPolicyModule,
          ),
      },
      {
        path: 'terms-of-service',
        loadChildren: () =>
          import('../app/features/terms-of-service/terms-of-service-module').then(
            (m) => m.TermsOfServiceModule,
          ),
      },
      {
        path: 'data-deletion',
        loadChildren: () =>
          import('../app/features/data-deletion/data-deletion-module').then(
            (m) => m.DataDeletionModule,
          ),
      },
      {
        path: 'security',
        loadChildren: () =>
          import('../app/features/security/security-module').then((m) => m.SecurityModule),
      },
      {
        path: 'contact',
        loadChildren: () =>
          import('../app/features/contact/contact-module').then((m) => m.ContactModule),
      },
    ],
  },
  {
    path: '**',
    loadChildren: () =>
      import('../app/features/not-found/not-found-module').then((m) => m.NotFoundModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
