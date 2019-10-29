import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private router: ActivatedRoute) {
    this.router.params.subscribe( parametros => {
      console.log('Ruta padre');
      console.log(parametros);
    });
   }
}
