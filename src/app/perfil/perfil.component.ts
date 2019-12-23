import { Component, OnInit } from '@angular/core';
// se importará una libreria para consumir un servicio web
import {HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
	public listaPublicaciones: any;
  constructor(private post:HttpClient) {}

  ngOnInit() {
  	this.obtenerPublicaciones();
  }
/* metodos de peticion
*get
*post
*put
*delete
*/
  public obtenerPublicaciones():void{
  	this.post.get('https://jsonplaceholder.typicode.com/posts').subscribe(
  		response=>{
  			console.log(response);
  			this.listaPublicaciones=response;
  		},
  		error=>{}
  	);
  }
  public darLike(publicacion: string):void{
  	alert('Le has dado like a '+publicacion)
  }


}
