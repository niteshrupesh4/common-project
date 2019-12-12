import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParentChildComponent } from './parent-child.component';
import { ParentComponent } from './parent/parent.component';


const routes: Routes = [
  {
    path: '', component: ParentChildComponent,
    children: [
      {
        path: '',
        component: ParentComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParentChildRoutingModule { }
