import {Libro} from '../models/Libro';

export class Usuario{

  id: number=0;
  Nombre: string= '';
  cedula: number=0;
  foto: string='';
  libros:Libro[]=[];
  exponible:string='';

}
