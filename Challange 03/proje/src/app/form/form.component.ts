import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {


  form = new FormGroup({
    first_name: new FormControl(''),
    last_name: new FormControl(''),
  });

  @Input() set getForm(value: any) {
    if (!value) return
    this.sendForm.emit(this.form.value)
  }

  @Output() sendForm = new EventEmitter()

  constructor() { }

  ngOnInit(): void {

  }

}
