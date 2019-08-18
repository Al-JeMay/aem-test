import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit {

  public formRegister: FormGroup;

  //// Keep track for any changes update from 'TagInputComponent'
  skillSet: Array<String> = [];

  constructor(
    private formBuilder: FormBuilder
  ) { }

  //// Initialize the form contorls's for defualt value
  ngOnInit() {
    this.formRegister = this.formBuilder.group({
      name: this.formBuilder.group({
        first: '',
        last: ''
      }),
      email: '',
      phone: this.formBuilder.group({
        mobile: ''
      }),
      skills: this.formBuilder.group({
        skills: this.skillSet
      }),
    });
  }

  //// Update the skillsets for each new skill set was added
  addTags(skills: Array<String>): void {
    this.skillSet = skills;
    this.formRegister.controls['skills'].setValue({skills});
  }

  //// Update the skillsets for each new skill set was removed
  removeTags(skills: Array<String>): void {
    this.skillSet = skills;
    this.formRegister.controls['skills'].setValue({skills});
  }

}
