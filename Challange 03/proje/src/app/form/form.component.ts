import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import * as DemoActions from './../NgRx/actions/data.actions';
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
    // this.sendForm.emit(this.form.value)
    
    this.store.dispatch(new DemoActions.AddDemo({
      firstname: this.form.value.first_name,
      lastname: this.form.value.last_name
    }))
  }

  @Output() sendForm = new EventEmitter()

  constructor(private store: Store<AppState>) { }

  // addToStore() {
  //   this.store.dispatch(new DemoActions.AddDemo({
  //     firstname: this.form.value.firstname,
  //     lastname: this.form.value.lastname
  //   }))
  // }

  ngOnInit(): void {

  }

}
