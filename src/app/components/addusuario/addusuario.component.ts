import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Usuario} from '../../models/Usuario';
import {UsuarioService} from '../../services/usuario.service';
@Component({
  selector: 'app-addusuario',
  templateUrl: './addusuario.component.html',
  styleUrls: ['./addusuario.component.css']
})
export class AddusuarioComponent implements OnInit {

    constructor(private usuarioService:UsuarioService, private router:Router) { }

    id: number=0;
    Nombre: string= '';
    cedula: number=0;
    foto: string='';

  ngOnInit(): void {
  }

  onSubmit()
  {
    const nuevo=new Usuario();
    nuevo.id=this.id;
    nuevo.Nombre=this.Nombre;
    nuevo.cedula=this.cedula;
    nuevo.foto=this.foto;
    this.usuarioService.addUsuario(nuevo);
    this.router.navigate(['users']);
  }
}
