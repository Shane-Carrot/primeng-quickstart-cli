import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormExampleComponent } from './form-example.component';

const routes: Routes = [
  {
    path: '',
    component: FormExampleComponent,
    children: [
      {
        path: 'form-example',
        component: FormExampleComponent,
      },
    ],
  },
  {
    path: ':id',
    component: FormExampleComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormExampleRoutingModule { }
