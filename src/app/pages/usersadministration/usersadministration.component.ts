import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CrearUsuarioService } from 'src/app/services/service.index';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';




@Component({
  // tslint:disable-next-line: component-selector
  selector: 'ngbd-modal-content',
  templateUrl: './usersadministration.component.html',
  providers: [NgbModal], 
})
// tslint:disable-next-line: component-class-suffix
export class NgbdModalContent {

  @Input() name;

  constructor(public activeModal: NgbActiveModal) {}
}

@Component({
  selector: 'app-usersadministration',
  templateUrl: './usersadministration.component.html',
  styleUrls: ['./usersadministration.component.scss']
})
export class UsersadministrationComponent implements OnInit {
  frmRegistroUsuario: FormGroup;

  constructor( private modalService: NgbModal,private _crearUsuarioService: CrearUsuarioService ) { 

    this.frmRegistroUsuario = new FormGroup({
      id: new FormControl(),
      full_name: new FormControl(),
      email: new FormControl(),
      password: new FormControl(),
      discriminator: new FormControl(),
      phone: new FormControl(''),
    });

  }

  ngOnInit() {
  }

  // open() {
  //   const modalRef = this.modalService.open(NgbdModalContent);
  //   modalRef.componentInstance.name = 'Anything';
  // }


  open2(content) {
    this.modalService.open(content);
  }

  
  Save(){
    console.log('guardar');

   let postData = {
      "email": this.frmRegistroUsuario.value.email,
      "password": this.frmRegistroUsuario.value.password,
      "full_name": this.frmRegistroUsuario.value.full_name,
      "phone": this.frmRegistroUsuario.value.phone,
      "discriminator": this.frmRegistroUsuario.value.discriminator
    }

    console.log(postData);


    // let prueba = JSON.stringify({ username, password, })

    this._crearUsuarioService.postCrearUsuario(this.frmRegistroUsuario.value.id ,postData).subscribe(res => {
        console.log("respuestaaaaaa",res);
    })
  }

}
