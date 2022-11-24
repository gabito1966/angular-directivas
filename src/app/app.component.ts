import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Registro de Usuarios';
  mensaje='';
  registrado = false;
  nombre:String="";
  apellido:String="";
  entradas: any;


  constructor(){
    this.entradas=[

      {titulo:"Python cada dia más presente"},
      {titulo:"Java presente desde hace más de 20 años"},
      {titulo:"Javascript cada vez más funcional"},
      {titulo:"Kotlin potencia para tus app"},
      {titulo:"¿Donde quedo Pascal?"},

    ]
  }

  registrarUsuario(){
    this.registrado=true
    this.mensaje = 'Usuario registrado con exito';
  }
}
