import { Component, OnInit, Input } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { FormGroup, FormControl } from "@angular/forms";
import { CrearPremioService,ListarPremiosService,EditarPremioService} from "src/app/services/service.index";

@Component({
  selector: "app-catalogopremios",
  templateUrl: "./catalogopremios.component.html",
  styleUrls: ["./catalogopremios.component.scss"],
  providers: [NgbModal]
})
export class CatalogopremiosComponent implements OnInit {
  frmRegistroPremio: FormGroup;
  listaPremios: any = [];
  premioAEditar = '';

  constructor(
    private modalService: NgbModal,
    private _crearPremioService: CrearPremioService,
    private _listarPremiosService: ListarPremiosService,
    private _editarPremioService: EditarPremioService
  ) {
    this.frmRegistroPremio = new FormGroup({
      description: new FormControl(),
      unit_value: new FormControl(),
      image_url: new FormControl(),
      available: new FormControl()
    });
  }

  ngOnInit() {
    this._listarPremiosService
    .getPremiosRegistrados()
    .subscribe(res => {
      this.listaPremios = res;
      console.log(res);
    });
  }

  guardarPremioCatalogo() {
    this._crearPremioService
      .postCrearPremio(this.frmRegistroPremio.value)
      .subscribe(res => {
        alert("registro guardado");
      });
  }

  obtenerPremio(idPremio, content) {
    console.log(idPremio);

    this.premioAEditar = idPremio;

    // console.log("identificacion del producto ", idProducto);

    this._editarPremioService
      .getListarPremio(idPremio)
      .subscribe((respuesta: any) => {
        console.log(respuesta);
        let premiosObtenidosActualizar: any = {
          description: respuesta.description,
          unit_value: respuesta.unit_value,
          image_url: respuesta.image_url,
          available: respuesta.available
        };
        this.frmRegistroPremio.setValue(premiosObtenidosActualizar);
        this.modalService.open(content);
      });
  }

  guardarEditarPremiosCatalogo(){
    let datos = this.frmRegistroPremio.value;
    this._editarPremioService.guardarEditarPremio(this.premioAEditar,datos).subscribe(res=>{
        console.log(res);
    });
  }


  modalAgregarPremio(content) {
    this.modalService.open(content);
  }
}
