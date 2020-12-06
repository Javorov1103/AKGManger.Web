import { NgModule } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MasterpageComponent } from './components/masterpage/masterpage.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    SharedModule,
    ReactiveFormsModule,
    CommonModule
  ],
  declarations: [
    LoginComponent,
    MasterpageComponent,
    SideNavComponent,
    DashboardComponent
  ]
})
export class CoreModule { }
