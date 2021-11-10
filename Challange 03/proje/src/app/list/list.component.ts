import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { DataModel } from '../models/data.model';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import * as DemoActions from './../NgRx/actions/data.actions'
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class AppListComponent implements OnInit {
  displayedColumns: string[] = ['first_name', 'last_name'];
  public dataSource = [];

  demo: Observable<DataModel[]>;
  
  constructor(private store: Store<AppState>) {
    this.demo = store.select('demoStore');
    this.demo.subscribe((res:any) => {
      this.dataSource = res
    })
  }

  removeFromTable(id: any) {
    this.store.dispatch(new DemoActions.RemoveDemo(id)); 
  }


  // @Input() set data(value: any) {
  //   this.dataSource = value
  // }

  @Output() public buttonClick = new EventEmitter();

  ngOnInit(): void {
  }

  addToList(event: any) {
    this.buttonClick.emit()
  }

}
