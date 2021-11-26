import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'Inicio',
    pathMatch: 'full'
  },
  {
    path: 'Inicio',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'Agregar_e',
    loadChildren: () => import('./contactenos/contactenos.module').then( m => m.ContactenosPageModule)
  },
  {
    path: 'Agendados',
    loadChildren: () => import('./operaciones/operaciones.module').then( m => m.OperacionesPageModule)
  },
  {
    path: 'cliente',
    loadChildren: () => import('./cliente/cliente.module').then( m => m.ClientePageModule)
  },
  {
    path: 'opclientes',
    loadChildren: () => import('./opclientes/opclientes.module').then( m => m.OpclientesPageModule)
  },
  {
    path: 'salon',
    loadChildren: () => import('./salon/salon.module').then( m => m.SalonPageModule)
  },
  {
    path: 'opsalon',
    loadChildren: () => import('./opsalon/opsalon.module').then( m => m.OpsalonPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
