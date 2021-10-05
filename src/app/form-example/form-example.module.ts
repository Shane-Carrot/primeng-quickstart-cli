import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormExampleRoutingModule } from './form-example-routing.module';
import { FormExampleComponent } from './form-example.component';

import {TabViewModule} from 'primeng/tabview';

import { InputTextModule } from "primeng/inputtext";
import { ButtonModule } from "primeng/button";
import { CheckboxModule } from "primeng/checkbox";
import { RadioButtonModule } from "primeng/radiobutton";
import { FormsModule } from "@angular/forms";
import { DropdownModule } from "primeng/dropdown";


@NgModule({
  declarations: [
    FormExampleComponent
  ],
  imports: [
    CommonModule,
    TabViewModule,
    ButtonModule,
    InputTextModule,
    CheckboxModule,
    RadioButtonModule,
    FormsModule,
    DropdownModule,
    FormExampleRoutingModule
  ]
})
export class FormExampleModule { }
