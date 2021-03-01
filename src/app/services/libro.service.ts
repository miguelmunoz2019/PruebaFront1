import { Injectable } from '@angular/core';
import { Libro } from '../models/Libro';
@Injectable({
  providedIn: 'root'
})
export class LibroService {
  libros:Libro[]=[
        {
          id:0,
          titulo:'Vampyr',
          precio:80000,
          isbn:'978-1-4028-9462-1',
          alquilado:true

        },
        {
          id:1,
          titulo:'Harry Potter y la piedra filosofal',
          precio:35000,
          isbn:'128-1-4028-9462-2',
          alquilado:false

        }
        ,
        {
          id:2,
          titulo:'El alquimista',
          precio:70000,
          isbn:'300-1-4028-9462-3',
          alquilado:false

        }
        ,
        {
          id:3,
          titulo:'el principito',
          precio:30000,
          isbn:'782-1-4028-9462-4',
          alquilado:false

        }
        ,
        {
          id:4,
          titulo:'Dracula',
          precio:27000,
          isbn:'578-1-4028-9462-5',
          alquilado:false

        }
        ,
        {
          id:5,
          titulo:'Estudio en escarlata',
          precio:23000,
          isbn:'159-1-4028-9462-6',
          alquilado:false

        }
        ,
        {
          id:6,
          titulo:'Game of Thrones',
          precio:43000,
          isbn:'951-1-4028-9462-7',
          alquilado:false

        }
        ,
        {
          id:7,
          titulo:'el arte de la guerra',
          precio:47000,
          isbn:'852-1-4028-9462-8',
          alquilado:false

        }
        ,
        {
          id:8,
          titulo:'ajedrez para dummies',
          precio:77000,
          isbn:'258-1-4028-9462-9',
          alquilado:false

        }
        ,
        {
          id:9,
          titulo:'El mundo y sys demonios',
          precio:52000,
          isbn:'968-1-4028-9462-0',
          alquilado:false

        }
        ,
        {
          id:10,
          titulo:'El quijote de la mancha',
          precio:125000,
          isbn:'238-1-4028-9462-7',
          alquilado:false

        }
      ];
    constructor() { }

    getLibros(){
      return this.libros
    }
    addlibro(libro:Libro){
      this.libros.unshift(libro);
    }
    alquilar(libro:Libro)
    {
    var a= this.libros.filter(x=>x.id == libro.id)[0]
    a.alquilado=true
    this.libros=this.libros.filter(x=>x.id != libro.id);
    this.libros.unshift(a);

    }
    devolver(libro:Libro)
    {
    var a= this.libros.filter(x=>x.id == libro.id)[0]
    a.alquilado=false
    this.libros=this.libros.filter(x=>x.id != libro.id);
    this.libros.unshift(a);

    }
  }
