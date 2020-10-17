import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  frmLogin: FormGroup;

  constructor(
    private loginService: LoginService,
    private toastr: ToastrService,
    private router: Router
  ) {
    this.frmLogin = new FormGroup({
      username: new FormControl(),
      password: new FormControl(),
      registration_id: new FormControl('')
    });
  }

  ngOnInit() {}

  inicioSesion() {
    this.loginService.postIniciarSesion(this.frmLogin.value).subscribe((res: any) => {
      localStorage.setItem('token', res.access_token);
      this.router.navigate(['home/pedidos']);
    }, () => {
      this.toastr.error('', 'Revise las credenciales o intentelo de nuevo más tarde.');
    });
  }

}
