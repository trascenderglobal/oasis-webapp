import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetallePedidoService } from 'src/app/services/service.index';


@Component({
  selector: 'app-detalle-pedidos',
  templateUrl: './detalle-pedidos.component.html',
  styleUrls: ['./detalle-pedidos.component.scss']
})
export class DetallePedidosComponent implements OnInit {

  datosPrimerTabla: any = {};
  productos: any= [];
  constructor(private router: ActivatedRoute, private _detallePedidoService: DetallePedidoService ) {
    this.router.params.subscribe(params => {
      console.log('paramssssss', params.id);
      this.getDetallePedido(params.id);
    });
   }

  ngOnInit() {
  }


  listarProductos(idCliente){
    
    this._detallePedidoService.getListarProductosCliente(idCliente).subscribe(
      (res2:any) => {
        // this.listaProductos = res;
        // this.datosPrimerTabla = {
        //   numPedido: res.id,
        //   fecha: res.created,
        //   nombre: res.user.full_name,
        //   estado: res.status.name,
        //   observaciones: res.comments,
        //   direccion: res.location
        //     ? res.location.address
        //     : ""
        // };
        // this.objects.push(data);

        for (var i = 0; i < res2.orders.length; i++) {
          
          var data2 = {};

          for(var t = 0; t < res2.orders[i].order_products.length; t++ ){
            console.log("order_productosssss", res2.orders[t].order_products[t].product);
            data2 = {
              items: res2.orders[t].order_products[t].product,
            };
            this.productos.push(data2);
          }
          
          console.log("fuera del ciclo orderproductos",this.productos);

          // console.log("nueva respuesta", res2.orders[i])


          // this.objects.push(data);
        }

        // console.log("objeto", this.datosPrimerTabla);
        this.productos = res2;


        console.log("datos servicio detalle", this.productos);
      },
      err => {
        switch (err.status) {
          case 401:
            alert("token caduco");
            break;
          case 404:
            alert("error 404");
            break;
          default:
            alert("otro tipo de error ");
            break;
        }
      }
    );



  }

  getDetallePedido(id){

    this._detallePedidoService.getListarPedido(id).subscribe(
      (res:any) => {
        // this.listaProductos = res;
        this.datosPrimerTabla = {
          numPedido: res.id,
          fecha: res.created,
          nombre: res.user.full_name,
          estado: res.status.name,
          observaciones: res.comments,
          direccion: res.location
            ? res.location.address
            : ""
        };
        // this.objects.push(data);

        console.log("objeto", this.datosPrimerTabla);

        this.listarProductos(res.responsible_id);

        console.log(res);
      },
      err => {
        switch (err.status) {
          case 401:
            alert("token caduco");
            break;
          case 404:
            alert("error 404");
            break;
          default:
            alert("otro tipo de error ");
            break;
        }
      }
    );
  }
}
