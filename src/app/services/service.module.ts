import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CrearUsuarioService } from "./service.index";

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [CrearUsuarioService]
})
export class ServiceModule {}
