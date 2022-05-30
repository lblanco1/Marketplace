import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: '', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)}
];

export const AppRoutingModule: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes, { useHash: true });

