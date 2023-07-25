import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotFoundComponent } from './pages/not-found/not-found.component';


const routes: Routes = [
  {
    path: '', 
    loadChildren: () => import('./shared/layouts/public/public.module').then(m => m.PublicModule)
  },
  {
    path: '', 
    loadChildren: () => import('./shared/layouts/private/private.module').then(m => m.PrivateModule)
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
