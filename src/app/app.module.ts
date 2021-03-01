import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LibroComponent } from './components/libro/libro.component';
import { LibrosComponent } from './components/libros/libros.component';
import { AddlibroComponent } from './components/addlibro/addlibro.component';
import { FormsModule } from '@angular/forms';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { AddusuarioComponent } from './components/addusuario/addusuario.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LibroComponent,
    LibrosComponent,
    AddlibroComponent,
    UsuarioComponent,
    UsuariosComponent,
    AddusuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
