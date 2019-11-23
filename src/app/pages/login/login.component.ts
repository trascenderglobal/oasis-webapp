import { Component, OnInit } from "@angular/core";
//import { AuthService } from 'src/app/services/auth.service';
import { LoginService } from "../../services/login.service";
//import { UserService } from '../../services/user.service';
//import { User } from 'src/app/models/user';
//import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
//import { FirebaseZoneScheduler } from '@angular/fire';
import { Router } from "@angular/router";
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  frmLogin: FormGroup;

  //userData: User;
  //loginF: FormGroup;

  constructor(
    private _loginService: LoginService,
    private router: Router
  ) {
    this.frmLogin = new FormGroup({
      username: new FormControl(),
      password: new FormControl(),
      registration_id: new FormControl("")
    });
  }

  ngOnInit() {}
  inicioSesion() {
    this._loginService.postIniciarSesion(this.frmLogin.value).subscribe(
      (res: any) => {
        localStorage.setItem("token", res.access_token);
        this.router.navigate(["home"]);
      },
      err => {
        switch (err.status) {
          case 403:
            alert("Usuario o contraseña incorrectos");
            break;
          case 409:
            alert("error 409");
            break;
          case 500:
            alert("error 500");
            break;
          default:
            alert("otro tipo de error ");
            break;
        }
      }
    );
  }
}


