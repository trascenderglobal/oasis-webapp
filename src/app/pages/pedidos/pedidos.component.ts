import { Component, OnInit } from "@angular/core";
import { ListarPerdidosService } from "src/app/services/service.index";
import {Router} from '@angular/router';

@Component({
  selector: "app-pedidos",
  templateUrl: "./pedidos.component.html",
  styleUrls: ["./pedidos.component.scss"]
})
export class PedidosComponent implements OnInit {
  objects: any = [];
  page = 1;
  pageSize = 4;
  collectionSize = "";

  constructor(private _listarPerdidosService: ListarPerdidosService,private router: Router ) {}

  ngOnInit() {
    this._listarPerdidosService.getPedidos().subscribe((res: any) => {
      for (var i = 0; i < res.orders.length; i++) {
        var data = {};
        data = {
          pedido: res.orders[i].id,
          fecha: res.orders[i].created,
          nombre: res.orders[i].user.full_name,
          estado: res.orders[i].status.name,
          observaciones: res.orders[i].comments,
          direccion: res.orders[i].location
            ? res.orders[i].location.address
            : ""
        };
        this.objects.push(data);
      }
      // console.log(this.objects);
      this.collectionSize = this.objects.length;
    });
  }



  verPromocion(param) {
    this.router.navigate(['/detalle-pedidos/', param ]);
  }





}
