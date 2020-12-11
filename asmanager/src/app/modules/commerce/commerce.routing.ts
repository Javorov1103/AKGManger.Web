import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from '../../services/auth-guard.service';
import { CommerceComponent } from './commerce.component';
import { ServiceordersListComponent } from './orders/components/serviceorders-list/serviceorders-list.component';

const COMMERCE_ROUTES: Routes = [
    {
        path: "",
        component: CommerceComponent,
        children: [
            {
                path: "",
                redirectTo: 'list',
                pathMatch: 'full'
            },
            {
                path: "list",
                component: ServiceordersListComponent,
                canActivate: [AuthGuardService]
            }
        ]
    },

]

export const commerceRouting = RouterModule.forChild(COMMERCE_ROUTES);