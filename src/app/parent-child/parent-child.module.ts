import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParentChildRoutingModule } from './parent-child-routing.module';
import { ParentChildComponent } from './parent-child.component';
import { ParentComponent } from './parent/parent.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';


@NgModule({
  declarations: [
    ParentChildComponent, 
    ParentComponent, 
    Child1Component, 
    Child2Component
  ],
  imports: [
    CommonModule,
    ParentChildRoutingModule
  ],
  entryComponents:[
    Child1Component,
    Child2Component
  ]
})
export class ParentChildModule { }
