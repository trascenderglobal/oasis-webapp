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
    /*private userService: UserService,*/ /*private auth: AuthService,*/ private router: Router
  ) {
    this.frmLogin = new FormGroup({
      username: new FormControl(),
      password: new FormControl(),
      registration_id: new FormControl("")
    });
  }

  ngOnInit() {}
  // logIn(username: string, password: string, registration_id:string = '') {
  //   // event.preventDefault(); // Avoid default action for the submit button of the login form
  //   fetch('https://oasis-app-backend.herokuapp.com/api/auth/login',
  //     {
  //       method: 'POST', // or 'PUT'
  //       body: JSON.stringify({ username, password, registration_id}), // data can be `string` or {object}!
  //       headers: {
  //         'Content-Type': 'application/json'
  //       }
  //     }
  //   )
  //     .then(res => res.json())
  //     .then(result => {
  //       if (!result.access_token) return console.log(result.message), alert("Usuario y/o Contaseña incorrecto");
  //           console.log("LOGIN EXITOSO")
  //       localStorage.setItem("token", result.access_token);
  //       console.log("TOKEN GUARDADO EN LOCALSTORAGE")
  //       console.log("REDIRECIONANDO")
  //       this.router.navigate(['home/:id']);

  //       // this.navigate();
  //     });

  // }
  // afterLogin(){
  //   let valueEmail = (document.getElementById("email") as HTMLInputElement).value;

  //   (document.getElementById("password") as HTMLInputElement).value = "";
  //    localStorage.setItem("valueUsername", valueEmail);
  // }
  inicioSesion() {
    this._loginService.postIniciarSesion(this.frmLogin.value).subscribe(
      (res: any) => {
        console.log(res);
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

/*login() {
  console.log('submit')
 this.userData.email = this.loginF.value.email;
  this.userData.year = this.loginF.value.year;
    return this.auth.login(this.userData)
    .then( res => {
      console.log('¡LOGIN CORRECTO!');
      console.log(res);
      this.router.navigate(['home', res.user.uid]);
    }).catch( err => {
      console.log('¡¡ERROR ENTRANDO!!', err);
    });
}*/
