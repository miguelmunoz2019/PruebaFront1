import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LibrosComponent } from './components/libros/libros.component';
import { AddlibroComponent } from './components/addlibro/addlibro.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { AddusuarioComponent } from './components/addusuario/addusuario.component';

const routes: Routes = [
  {
    path: '',
    component: LibrosComponent
  },
  {
    path: 'add',
    component: AddlibroComponent
  }
  ,
  {
    path: 'users',
    component: UsuariosComponent
  }
  ,
  {
    path: 'addUser',
    component: AddusuarioComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
