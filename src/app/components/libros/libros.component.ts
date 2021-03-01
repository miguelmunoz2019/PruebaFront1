import { Component, OnInit } from '@angular/core';
import {Libro} from '../../models/Libro';
import {LibroService} from '../../services/libro.service';
@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit {

  libros:Libro[] = []
  constructor(private libroService:LibroService) { }

  ngOnInit(): void {
    this.libros=this.libroService.getLibros();
  }
  deleteLibro(libro:Libro){
      this.libros = this.libros.filter(x=>x.id != libro.id);
    }
}
