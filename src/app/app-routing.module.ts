import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'form-example', 
    loadChildren: () => import('./form-example/form-example.module').then(m => m.FormExampleModule)
  },
  {
    path: 'grid', 
    loadChildren: () => import('./grid/grid.module').then(m => m.GridModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
