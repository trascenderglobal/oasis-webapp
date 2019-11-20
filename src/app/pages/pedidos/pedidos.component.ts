import { Component, OnInit } from '@angular/core';
import { ListarPerdidosService } from 'src/app/services/service.index';


@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.scss']
})
export class PedidosComponent implements OnInit {

  objects: any = [];

  constructor(private _listarPerdidosService: ListarPerdidosService) { }

  ngOnInit() {
    this._listarPerdidosService.getPedidos().subscribe((res:any) => {
      console.log(res);
     

      for (var i = 0; i < res.orders.length; i++) {

        var prueba = {};
        prueba = 

          {
            pedido: res.orders[i].id,
            fecha: res.orders[i].created,
            nombre: res.orders[i].user.full_name,
            estado: res.orders[i].status.name,
            observaciones: res.orders[i].order_products[0].product.description,
            direccion: (res.orders[i].location ? res.orders[i].location.address : ""),
          }
        

        this.objects.push(prueba);
        // console.log("sustos", res.orders[i].id);
      }

      console.log("sharannn",this.objects)



      // console.log(this.objects);

    });
  }

}
