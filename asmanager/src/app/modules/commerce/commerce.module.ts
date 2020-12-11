import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { commerceRouting } from './commerce.routing';
import { ServiceordersListComponent } from './orders/components/serviceorders-list/serviceorders-list.component';




@NgModule({
    declarations: [
        ServiceordersListComponent
    ],
    imports: [
        commerceRouting,
        SharedModule
    ],
    providers: [

    ]
})
export class CommerceModule { }
