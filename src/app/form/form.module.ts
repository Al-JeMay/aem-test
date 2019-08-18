import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FormRouting } from './form.routing';
import { FormPage } from './form.page';
import { TagInputComponent } from '../shared/tag-input/tag-input.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FormRouting
  ],
  declarations: [
    FormPage,
    TagInputComponent,
  ]
})
export class FormModule { }
