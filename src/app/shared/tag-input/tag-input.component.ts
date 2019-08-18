/*
================================================
 Title:  Tag Input Component - aem-angular-test
 Author: Al JeMay
 Date:   18 Aug 2019
================================================
*/

import { Component, OnInit, ViewChild, Input, ElementRef, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { find, pull } from 'lodash';

@Component({
  selector: 'app-tag-input',
  templateUrl: './tag-input.component.html',
  styleUrls: ['./tag-input.component.scss']
})
export class TagInputComponent implements OnInit {
  @ViewChild('tagInput') tagInputRef: ElementRef;
  @Input() formRegister: FormGroup;
  @Output() addTags: EventEmitter<any> = new EventEmitter();
  @Output() removeTags: EventEmitter<any> = new EventEmitter();

  tags: string[] = [];

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.formRegister = this.fb.group({
      tag: [undefined],
    });
  }

  focusTagInput(): void {
    this.tagInputRef.nativeElement.focus();
  }

  //// Determine if user press key event
  //// press ',' or 'Enter' key to add new skill
  //// press 'Backspace' key to remove existing skill
  onKeyUp(event: KeyboardEvent): void {
    const inputValue: string = this.formRegister.controls.tag.value;
    if (event.code === 'Backspace' && !inputValue) {
      this.removeTag();
      return;
    } else {
      if (event.code === 'Comma' || event.code === 'Enter') {
        this.addTag(inputValue);
        this.formRegister.controls.tag.setValue('');
      }
    }
  }

  //// Update the tags var for each new added skill
  //// Dispatch event for parent container call its added function
  addTag(tag: string): void {
    if (tag[tag.length - 1] === ',' || tag[tag.length - 1] === ' ') {
      tag = tag.slice(0, -1);
    }
    if (tag.length > 0 && !find(this.tags, tag)) {
      this.tags.push(tag);
      this.addTags.emit(this.tags);
    }
  }

  //// Update the tags var for each remove skill
  //// Dispatch event for parent container call its remove function
  removeTag(tag?: string): void {
    if (!!tag) {
      pull(this.tags, tag);
      this.removeTags.emit(this.tags);
    } else {
      this.tags.splice(-1);
      this.removeTags.emit(this.tags);
    }
  }

}
