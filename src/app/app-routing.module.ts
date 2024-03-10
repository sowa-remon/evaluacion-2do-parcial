import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LibrosComponent } from './pages/libros/libros.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { AgendaComponent } from './pages/agenda/agenda.component';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes =[
  {
    path: 'home',
    component: HomeComponent
  }, 
  {
    path: 'libros',
    component: LibrosComponent
  },  
  {
    path: 'clientes',
    component: ClientesComponent
  },
  {
    path: 'agenda',
    component: AgendaComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  }
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
