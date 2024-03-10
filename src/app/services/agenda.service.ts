import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Tarea } from '../models/tarea';

@Injectable({
  providedIn: 'root'
})
export class AgendaService {

  constructor(private firestore:AngularFirestore) { }
  getTareas(){
    return this.firestore.collection('tareas').snapshotChanges();
  }
  createTarea(tarea:Tarea){
    return this.firestore.collection('/tareas').add(Object.assign({}, tarea));
  }
  updateTarea(tarea:Tarea){
    this.firestore.doc('/tareas/'+tarea.id).update(tarea);
  }

  deleteTarea(tareaId:string){
    this.firestore.doc('/tareas/'+tareaId).delete();
  }
}

