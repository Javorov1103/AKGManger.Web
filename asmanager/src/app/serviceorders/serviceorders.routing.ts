import { RouterModule, Routes } from '@angular/router';
import { ServiceOrdersComponent } from "./serviceorder.component";
import { ServiceordersListComponent } from './serviceorders-list/serviceorders-list.component';

const SERVICEORDERS_ROUTES: Routes = [
    {
        path: "",
        component: ServiceOrdersComponent
    },
    {
        path: "list",
        component: ServiceordersListComponent
    }
]

export const ordersRouting = RouterModule.forChild(SERVICEORDERS_ROUTES);