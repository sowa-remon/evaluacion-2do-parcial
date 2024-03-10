import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../models/cliente';
import { ClienteService } from '../../services/cliente.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.css',
})
export class ClientesComponent implements OnInit {
  clientes: Cliente[] = [];
  cliente = new Cliente();

  constructor(private clienteService: ClienteService) {}

  ngOnInit(): void {
    this.clienteService.getClientes().subscribe((data) => {
      this.clientes = data.map((doc) => {
        return {
          ...(doc.payload.doc.data() as Cliente),
          id: doc.payload.doc.id,
        };
      });
    });
  }

  insertarCliente() {
    this.clienteService.createCliente(this.cliente);
    this.cliente = new Cliente();
  }
  selectCliente(clienteSeleccionado: Cliente) {
    this.cliente = clienteSeleccionado;
  }
  updateCliente() {
    this.clienteService.updateCliente(this.cliente);
    this.cliente = new Cliente();
  }
  deleteCliente(id: string) {
    this.clienteService.deleteCliente(id);
    this.cliente = new Cliente();
  }
}
