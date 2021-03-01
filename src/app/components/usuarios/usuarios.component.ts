import { Component, OnInit } from '@angular/core';
import {Usuario} from '../../models/Usuario';
import {UsuarioService} from '../../services/usuario.service';
@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  usuarios:Usuario[] = []
  constructor(private usuarioService:UsuarioService) {}


  ngOnInit(): void {
    this.usuarios=this.usuarioService.getUsuarios();
    for (let usuario of this.usuarios) {
      usuario.exponible='';
    for (let entry of usuario.libros) {
  usuario.exponible = usuario.exponible.concat(entry.titulo);
  usuario.exponible=usuario.exponible.concat('  \n');
}
}
  }
  deleteUsuario(usuario:Usuario){
      this.usuarios = this.usuarios.filter(x=>x.id != usuario.id);
    }


}
