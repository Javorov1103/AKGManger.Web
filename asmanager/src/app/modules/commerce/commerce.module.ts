import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { commerceRouting } from './commerce.routing';
import { ServiceordersListComponent } from './orders/components/serviceorders-list/serviceorders-list.component';
import { ServiceorderEditComponent } from './orders/components/serviceorder-edit/serviceorder-edit.component';
import { ClientsListComponent } from './clients/components/clients-list/clients-list.component';
import { ClientEditComponent } from './clients/components/client-edit/client-edit.component';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { CommerceComponent } from './commerce.component';




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

    ]
})
export class CommerceModule { }
