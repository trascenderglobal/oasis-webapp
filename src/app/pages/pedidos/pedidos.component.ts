import { Component, OnInit } from '@angular/core';
import { ListarPerdidosService } from 'src/app/services/service.index';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styles: ['']
})
export class PedidosComponent implements OnInit {
  orders: any = [];
  page = 1;
  pageSize = 5;
  collectionSize = 0;

  constructor(private orderService: ListarPerdidosService) {}

  ngOnInit() {
    this.orderService.getPedidos().subscribe((res: any) => {
      this.orders = res.orders;
      this.collectionSize = this.orders.length;
    });
  }

}
