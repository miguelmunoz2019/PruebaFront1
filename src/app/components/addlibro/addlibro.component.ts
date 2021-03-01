import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Libro} from '../../models/Libro';
import {LibroService} from '../../services/libro.service';

@Component({
  selector: 'app-addlibro',
  templateUrl: './addlibro.component.html',
  styleUrls: ['./addlibro.component.css']
})
export class AddlibroComponent implements OnInit {

  id:number=0;
  titulo:string ='';
  precio: number=0;
  isbn:string ='';
  alquilado: boolean=false;

  constructor(private libroService:LibroService, private router:Router) { }

  ngOnInit(): void {
  }
  onSubmit()
  {
    const nuevo=new Libro();
    nuevo.id=this.id;
    nuevo.titulo=this.titulo;
    nuevo.precio=this.precio;
    nuevo.isbn=this.isbn;
    nuevo.alquilado=false;
    this.libroService.addlibro(nuevo);
    this.router.navigate(['/']);
  }

}
