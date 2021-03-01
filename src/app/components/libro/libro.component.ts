import { Component, OnInit, Input, EventEmitter , Output } from '@angular/core'
import {Libro} from '../../models/Libro'

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css']
})
export class LibroComponent implements OnInit {

  @Input() libro: Libro= new Libro();
  @Output() deleteLibro: EventEmitter<Libro>= new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  onDelete(libro: Libro){
    this.deleteLibro.emit(libro)
  }
}
