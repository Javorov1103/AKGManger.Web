import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from '../../services/auth-guard.service';
import { ClientEditComponent } from './clients/components/client-edit/client-edit.component';
import { ClientsListComponent } from './clients/components/clients-list/clients-list.component';
import { CommerceComponent } from './commerce.component';
import { ServiceordersListComponent } from './orders/components/serviceorders-list/serviceorders-list.component';

const COMMERCE_ROUTES: Routes = [
    {
        path: '',
        component: CommerceComponent,
        children: [
            {
                path: '',
                redirectTo: 'serviceorders',
                canActivate: [AuthGuardService]
            },
            {
                path: 'serviceorders',
                component: ServiceordersListComponent,
                canActivate: [AuthGuardService]
            },
            {
                path: "clients",
                component: ClientsListComponent,
                canActivate: [AuthGuardService]
            },
            {
                path: "clients/edit/:id",
                component: ClientEditComponent
            }
        ]
    }

]

export const commerceRouting = RouterModule.forChild(COMMERCE_ROUTES);