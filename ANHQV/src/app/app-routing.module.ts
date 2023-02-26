import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';

// Load children nos permite cargar un módulo al navegar a una ruta. La función de callback impora el módulo que nosotros queramos, la función import devuelve una promesa que lleva m.(nombre del componente)


const routes: Routes = [
  {
    path: '',
    // Redirect to indica a la ruta que quiero redirigir cuando el path se cumple
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    //Ruta que lleva al Home
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
  },
  {
    //Ruta que lleva a la lista de personajes
    path: 'character-list',
    loadChildren: () => import('./pages/character-list/character-list.module').then(m => m.CharacterListModule)
  },
  {
    //Ruta que lleva al detalle del personaje
    path: 'detail/:id',
    loadChildren: () => import('./pages/detail/detail.module').then(m => m.DetailModule)
  },
  {
    //Ruta que lleva al apartado de episodios
    path: 'episodios',
    loadChildren: () => import('./pages/episodio/episodio.module').then(m => m.EpisodioModule)
  },
  {
    //Ruta que lleva al formulario para crear un personaje nuevo
    path: 'create-character',
    loadChildren: () => import('./pages/create-character/create-character.module').then(m => m.CreateCharacterModule),
    canActivate: [AuthGuard]
  },
  {
    //Ruta que lleva a mis creaciones
    path: 'creations',
    loadChildren: () => import('./pages/creations/creations.module').then(m => m.CreationsModule),
    //canActivate: [AuthGuard]
  },
  {
    //Ruta que lleva a mis creaciones
    path: 'create-creations',
    loadChildren: () => import('./pages/create-creations/create-creations.module').then(m => m.CreateCreationsModule),
    canActivate: [AuthGuard]
  },
  {
    //Ruta de login
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)
  },
  {
    //Ruta de la cuenta
    path: 'account',
    loadChildren: () => import('./pages/account/account.module').then(m => m.AccountModule),
    canActivate: [AuthGuard]
  },
  {
    //Ruta que lleva al apartado sobre mi
    path: 'about',
    loadChildren: () => import('./pages/about/about.module').then(m => m.AboutModule)
  },
  {
    // Path con ** acepta cualquier ruta.
    path: '**',
    loadChildren: () => import('./pages/not-found/not-found.module').then(m => m.NotFoundModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
