import { NgModule } from '@angular/core';
import { ServiceordersListComponent } from './serviceorders-list/serviceorders-list.component';
import { ordersRouting } from './serviceorders.routing';
import { SharedModule } from '../shared/shared.module';
import { OrdersService } from '../core/services/orders.service';
import { ServiceOrdersComponent } from './serviceorder.component';




@NgModule({
  declarations: [
    ServiceOrdersComponent
  ],
  imports: [
    ordersRouting,
    SharedModule
  ],
  providers: [
    OrdersService
  ]
})
export class ServiceordersModule { }
