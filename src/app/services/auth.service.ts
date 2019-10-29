import { Injectable, NgZone } from '@angular/core';
// import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
// import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { User } from '../models/user';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 // userData: User;
  constructor(
  // public router: Router
    ) {
     /* firebase.auth().onAuthStateChanged( user => {
        if (user) {
          this.userData = user;
          localStorage.setItem('currentuser', JSON.stringify(user));
        } else {
          this.userData = null;
        }
      });
     }

     // Logeo con correo y contraseña
     login(user: User) {
      return new Promise<any>((resolve, reject) => {
        firebase.auth().signInWithEmailAndPassword(user.email, user.password)
          .then(
            res => {
              resolve(res);
              // console.log('¡¡LOGIN EXITOSO!!');
              // console.log(res.user.uid);
              // this.router.navigate(['home']);
            },
            err => {
              reject(err);
              // console.log('¡¡HA OCURRIDO UN ERROR EN LOGIN!!', err);
            }
          );
      });
     }

     logout() {
       return new Promise((resolve, reject) => {
         if (firebase.auth().currentUser) {
          firebase.auth().signOut()
            .then(() => {
              console.log('¡SALIENDO!');
              resolve();
            }).catch((error) => {
              console.log('¡HA OCURRIDO UN ERROR AL MOMENTO DE SALIR', error);
              reject(error);
            });
         }
       });*/
     }
}
