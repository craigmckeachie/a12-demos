import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepAComponent } from './step-a/step-a.component';
import { StepBComponent } from './step-b/step-b.component';
import { StepCComponent } from './step-c/step-c.component';
import { StepDComponent } from './step-d/step-d.component';
import { StepEComponent } from './step-e/step-e.component';



@NgModule({
  declarations: [
    StepAComponent,
    StepBComponent,
    StepCComponent,
    StepDComponent,
    StepEComponent
  ],
  imports: [
    CommonModule
  ]
})
export class StepsModule { }
