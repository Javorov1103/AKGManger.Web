import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/core/services/orders.service';

@Component({
  selector: 'app-serviceorders-list',
  templateUrl: './serviceorders-list.component.html',
  styleUrls: ['./serviceorders-list.component.css']
})
export class ServiceordersListComponent implements OnInit {

  constructor(private orderSerivce: OrdersService) { }

  ngOnInit(): void {
    this.orderSerivce.testApi().subscribe((data) => {
      console.log(data);
    });
  }

}
