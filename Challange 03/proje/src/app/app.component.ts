import { Component, OnInit } from '@angular/core';

export interface ListModel {
  first_name: string;
  last_name: string;
}
enum Button {
  FIRST_BUTTON = 'first_button',
  SECOND_BUTTON = 'second_button',
  DEFAULT = 'Default'
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'challange-Angular';
  data_list1: ListModel[] = [];
  data_list2: ListModel[] = [];

  getForm: Date | any;

  button: Button = Button.DEFAULT;

  public get Button(): typeof Button {
    return Button;
  }

  ngOnInit(): void {

  }

  buttonClick(value: any) {
    this.button = value
    this.getForm = new Date()
  }
  form(form: any) {
    let array: any = []
    switch (this.button) {
      case Button.FIRST_BUTTON:
        this.data_list1.push(form)
        this.data_list1 = array.concat(this.data_list1)
        break;
      case Button.SECOND_BUTTON:
        this.data_list2.push(form)
        this.data_list2 = array.concat(this.data_list2)
        break;
    }
  }
  deleteAllList() {
    this.data_list1 = []
    this.data_list2 = []
  }
}
