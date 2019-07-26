import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './my-to-do/my-to-do.module#MyToDoPageModule'
  },
  {
    path: 'completed',
    loadChildren: './completed-to-do/completed-to-do.module#CompletedToDoPageModule'
  },
  // { path: 'my-to-do', loadChildren: './my-to-do/my-to-do.module#MyToDoPageModule' },
  // { path: 'completed-to-do', loadChildren: './completed-to-do/completed-to-do.module#CompletedToDoPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
