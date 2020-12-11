import { RouterModule, Routes } from "@angular/router";
import { CommerceModule } from './modules/commerce/commerce.module';
import { DashboardComponent } from './modules/core/components/dashboard/dashboard.component';
import { LoginComponent } from './modules/core/components/login/login.component';
import { MasterpageComponent } from './modules/core/components/masterpage/masterpage.component';
import { ServiceordersModule } from './modules/serviceorders/serviceorders.module';
import { AuthGuardService } from './services/auth-guard.service';

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
    path: '',
    component: MasterpageComponent,
    canActivate: [AuthGuardService],
    children: [
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
        data: {
          hasCompanySubTitle: true,
          title: 'Dashboard'
        }
      },
      {
        path: 'commerce',
        loadChildren: () => CommerceModule,
        canActivate: [AuthGuardService]
      },
    ]
  }
];

export const routing = RouterModule.forRoot(routes, { useHash: true });