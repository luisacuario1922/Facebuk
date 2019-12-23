import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MenuComponent} from './menu/menu.component';
import {LoginComponent} from './login/login.component';
import {PerfilComponent} from './perfil/perfil.component'
import {RegistroComponent} from './registro/registro.component'

const routes: Routes = [
	{
		path:'', component:MenuComponent
	},
	{
		path:'login',component:LoginComponent
	},
	{
		path: 'perfil', component:PerfilComponent
	},
	{
		path: 'registro', component:RegistroComponent
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
