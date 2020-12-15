import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { commerceRouting } from './commerce.routing';
import { ServiceordersListComponent } from './orders/components/serviceorders-list/serviceorders-list.component';
import { ServiceorderEditComponent } from './orders/components/serviceorder-edit/serviceorder-edit.component';
import { ClientsListComponent } from './clients/components/clients-list/clients-list.component';
import { ClientEditComponent } from './clients/components/client-edit/client-edit.component';
import { CommerceComponent } from './commerce.component';
import { ClientService } from './clients/services/client.service';




@NgModule({
    declarations: [
        ServiceordersListComponent,
        ServiceorderEditComponent,
        ClientsListComponent,
        ClientEditComponent,
        CommerceComponent
    ],
    imports: [
        commerceRouting,
        SharedModule
    ],
    providers: [
        ClientService
    ]
})
export class CommerceModule { }
