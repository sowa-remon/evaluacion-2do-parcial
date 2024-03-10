import { Component, OnInit } from '@angular/core';
import { Tarea } from '../../models/tarea';
import { AgendaService } from '../../services/agenda.service';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrl: './agenda.component.css'
})
export class AgendaComponent implements OnInit {
  tareas: Tarea[] = [];
  tarea = new Tarea();

  constructor(private tareaService:AgendaService) {}

  ngOnInit(): void {
    this.tareaService.getTareas().subscribe((data) => {
      this.tareas= data.map((doc) => {
        return {
          ...(doc.payload.doc.data() as Tarea),
          id: doc.payload.doc.id,
        };
      });
    });
  }

  insertarTarea() {
    this.tareaService.createTarea(this.tarea);
    this.tarea = new Tarea();
  }

  selectTarea(tareaSeleccionada: Tarea) {
    this.tarea = tareaSeleccionada;
  }

  updateTarea() {
    this.tareaService.updateTarea(this.tarea);
    this.tarea= new Tarea();
  }

  deleteTarea(id: string) {
    this.tareaService.deleteTarea(id);
    this.tarea= new Tarea();
  }
}
