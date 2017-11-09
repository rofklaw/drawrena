import {Routes, RouterModule } from '@angular/router';
import { LogregComponent } from './logreg/logreg.component';
import { LoginComponent } from './logreg/login/login.component';
import { RegisterComponent } from './logreg/register/register.component';

const APP_ROUTES: Routes = [
  {path: '', redirectTo: '/logreg', pathMatch: 'full' },
  {path: 'logreg', component: LogregComponent, children: [
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent}
  ]}
];

export const routing = RouterModule.forRoot(APP_ROUTES);
