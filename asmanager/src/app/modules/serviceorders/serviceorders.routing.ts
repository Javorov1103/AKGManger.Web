import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from '../../services/auth-guard.service';
import { ServiceOrdersComponent } from "./serviceorder.component";
import { ServiceordersListComponent } from './serviceorders-list/serviceorders-list.component';

const SERVICEORDERS_ROUTES: Routes = [
    {
        path: "",
        component: ServiceOrdersComponent,
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

export const ordersRouting = RouterModule.forChild(SERVICEORDERS_ROUTES);