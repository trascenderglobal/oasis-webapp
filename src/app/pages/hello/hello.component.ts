import { Component, OnInit, Input } from '@angular/core';
import { LoginComponent } from '../login/login.component'
@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent implements OnInit {
        @Input() title: string;
  constructor() { 
    this.title= "hola"
  }

  ngOnInit() {
  }

}
