import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { CursoComponent } from './mantenimientos/cursos/curso.component';
import { CursosComponent } from './mantenimientos/cursos/cursos.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EstudianteComponent } from './mantenimientos/estudiantes/estudiante.component';
import { ListadosComponent } from './gestion/listados.component';
import { PerfilComponent } from './perfil/perfil.component';
import { PerfilEstudiantilComponent } from './mantenimientos/estudiantes/perfil-estudiantil.component';
import { TitulacionComponent } from './gestion/titulacion.component';
import { UsuariosComponent } from './mantenimientos/usuarios/usuarios.component';

import { AdminGuard } from '../guards/admin.guard';
import { AsignacionComponent } from './mantenimientos/estudiantes/asignacion.component';
import { AsignacionesComponent } from './mantenimientos/estudiantes/asignaciones.component';
import { RegistroComponent } from './mantenimientos/usuarios/registro.component';
import { OfertaComponent } from './mantenimientos/cursos/oferta.component';
import { ImcComponent } from './mantenimientos/estudiantes/imc.component';

const childRoutes: Routes = [
  { path:'', component: DashboardComponent, data: { principal: 'Personal', titulo: 'Dashboard' }, },
  
  //Rutas propias del usuario logeado
  { path:'perfil', component: PerfilComponent, data: { principal: 'Personal', titulo: 'Perfil' } },
  { path:'settings', component: AccountSettingsComponent, data: { principal: 'Personal', titulo: 'Ajustes de cuenta' } },
  { path:'buscar/:termino', component: BusquedaComponent, data: { principal: 'Personal', titulo: 'Buscar' } },
  
  //Rutas de gestión

  { path:'gestion/listados', component: ListadosComponent, data: { principal: 'Gestión escolar', titulo: 'Gestión de listados de estudiantes' } },
  { path:'gestion/titulacion', canActivate: [AdminGuard] ,component: TitulacionComponent, data: { principal: 'Gestión escolar',  titulo: 'Módulo de títulos de bachiller' } },

  //Rutas de estudiantes
  //Si deseamos usar enlaces sin parámetros debemos ubicarlos antes de los que usan parámetros
  { path:'estudiantes/asignacion', canActivate: [AdminGuard] ,component: AsignacionesComponent, data: { principal: 'Estudiantes',  titulo: 'Asignación de estudiantes' } },
  { path:'estudiantes/asignacion/:id', canActivate: [AdminGuard] ,component: AsignacionComponent, data: { principal: 'Estudiantes',titulo: 'Administración de asignación de estudiantes' } },
  { path:'estudiantes/imc/:id', canActivate: [AdminGuard] ,component: ImcComponent, data: { principal: 'Estudiantes',titulo: 'Registro de IMC' } },
  { path:'estudiantes/perfil', component: PerfilEstudiantilComponent, data: { principal: 'Estudiantes',titulo: 'Datos de perfil estudiantil' } },
  { path:'estudiantes/:id', component: EstudianteComponent, data: { principal: 'Estudiantes',titulo: 'Administración de datos de estudiantes' } },

  //Rutas de cursos
  { path:'cursos', component: CursosComponent, data: { principal: 'Cursos', titulo: 'Administración de cursos' } },
  { path:'cursos/oferta', component: OfertaComponent, data: { principal: 'Cursos',titulo: 'Información de oferta educativa' } },
  { path:'curso/:id', component: CursoComponent, data: { principal: 'Cursos', titulo: 'Administración de información de curso' } },
  
  //Rutas protegidas para admin
    
  { path:'usuarios', canActivate: [AdminGuard] ,component: UsuariosComponent, data: { principal: 'Personal', titulo: 'Mantenimiento de usuarios' } },
  { path:'registro', canActivate: [AdminGuard] ,component: RegistroComponent, data: { principal: 'Personal', titulo: 'Registro de usuario' } },




]

@NgModule({
  imports: [RouterModule.forChild(childRoutes)],
  exports: [RouterModule]
})
export class ChildRoutesModule { 


}
