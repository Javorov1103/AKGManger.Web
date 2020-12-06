import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './core/components/login/login.component';
import { MasterpageComponent } from './core/components/masterpage/masterpage.component';
import { ServiceordersModule } from './serviceorders/serviceorders.module';
import { AuthGuardService } from './shared/services/auth-guard.service';

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
    // children: [
    //   {
    //     path: 'serviceorders',
    //     loadChildren: () => ServiceordersModule,
    //     canActivate: [AuthGuardService]
    //   },
    // ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
