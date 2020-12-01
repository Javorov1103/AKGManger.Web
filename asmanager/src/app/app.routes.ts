import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from './core/components/login/login.component';
import { ServiceordersModule } from './serviceorders/serviceorders.module';

const routes: Routes = [
    // {
    //   path: '',
    //   redirectTo: '/dashboard',
    //   pathMatch: 'full'
    // },
    {
      path: 'login',
      component: LoginComponent,
      data: {
        title: 'Login'
      }
    },
    {
      path: 'serviceorders',
      loadChildren: () => ServiceordersModule
      // canActivate: [AuthGuard],
  },
  ];

  export const routing = RouterModule.forRoot(routes, { useHash: true });