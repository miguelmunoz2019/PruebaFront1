import { Component, OnInit, Input, EventEmitter , Output } from '@angular/core'
import {Usuario} from '../../models/Usuario'
import {Libro} from '../../models/Libro'
import {UsuarioService} from '../../services/usuario.service';
import {LibroService} from '../../services/libro.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  @Input() usuario: Usuario= new Usuario();
  @Input() id: number= 0;
  @Output() deleteUsuario: EventEmitter<Usuario>= new EventEmitter();

  constructor(private usuarioService:UsuarioService,private libroService:LibroService,private router:Router) { }

  ngOnInit(): void {
  }
  onDelete(usuario: Usuario){
    this.deleteUsuario.emit(usuario)
  }
  onSubmit()
  {
    var a=this.libroService.getLibros().filter(x=>x.id == this.id)[0];
    this.usuarioService.alquilarLibroAUsuario(this.usuario,a);
    this.libroService.alquilar(a);
    this.router.navigate(['/']);
  }
  devolver()
  {
    var a=this.libroService.getLibros().filter(x=>x.id == this.id)[0];
    this.usuarioService.devolverLibroUsuario(this.usuario,a);
    this.libroService.devolver(a);
    this.router.navigate(['/']);
  }


}
