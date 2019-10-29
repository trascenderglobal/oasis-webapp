import { Component, OnInit } from '@angular/core';
//import { AuthService } from 'src/app/services/auth.service';
import { LoginService } from '../../services/login.service';
//import { UserService } from '../../services/user.service';
//import { User } from 'src/app/models/user';
//import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
//import { FirebaseZoneScheduler } from '@angular/fire';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  //userData: User;
  //loginF: FormGroup;

  constructor(private loginService: LoginService,/*private userService: UserService,*/ /*private auth: AuthService,*/ private router: Router) {


    /*this.userData = {
      uid: '',
      email: 'admin@oasis.com',
      year: '',
      photoURL: '',
      displayName: '',
      emailVerified: false
    };
 
    this.loginF = new FormGroup({
      // this.userData.email
      email: new FormControl('admin@oasis.com', [
        Validators.required,
        Validators.pattern('^[^@]+@[^@]+\.[a-zA-Z]{2,}$')
      ]),
      // this.userData.year
      year: new FormControl('admin1234', [
        Validators.required,
        Validators.minLength(4)
      ])
    });
       */
  }

  ngOnInit() {


  }
  logIn(username: string, password: string, event: Event) {
    event.preventDefault(); // Avoid default action for the submit button of the login form
    fetch('https://oasis-app-backend.herokuapp.com/api/auth/login',
      {
        method: 'POST', // or 'PUT'
        body: JSON.stringify({ username, password, }), // data can be `string` or {object}!
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
      .then(res => res.json())
      .then(result => {
        if (!result.access_token) return console.log(result.message), alert("Usuario y/o Contaseña incorrecto");
            console.log("LOGIN EXITOSO")
        localStorage.setItem("token", result.access_token);
        console.log("TOKEN GUARDADO EN LOCALSTORAGE")
        console.log("REDIRECIONANDO")
        this.router.navigate(['home/:id']);

        // this.navigate();
      });

  }
  afterLogin(){
    let valueEmail = (document.getElementById("email") as HTMLInputElement).value;

    (document.getElementById("password") as HTMLInputElement).value = "";
     localStorage.setItem("valueUsername", valueEmail);
     
 

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


