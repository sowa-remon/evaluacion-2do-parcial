import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Libro } from '../models/libro';
Libro

@Injectable({
  providedIn: 'root'
})
export class LibroService {

  constructor(private firestore:AngularFirestore) { }

  getLibros(){
    return this.firestore.collection('libros').snapshotChanges();
  }

  createLibro(libro:Libro){
  console.log(libro);
    return this.firestore.collection('/libros').add(Object.assign({},libro));
    
  }

  /**
   * NUEVO
   */
  updateLibro(libro:Libro){
    this.firestore.doc('/libros/'+libro.id).update(libro);
  }

  deleteLibro(libroId:string){
    this.firestore.doc('libros/'+libroId).delete();
  }

  // componente ng g c pages/libros
  /**
   * 
   */
}

