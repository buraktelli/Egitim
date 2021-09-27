import { Component, OnInit, Output, EventEmitter } from '@angular/core';

export interface PeriodicElement {
  first_name: string;
  last_name: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {first_name: 'burak', last_name: 'telli'},
  {first_name: 'burak', last_name: 'telli'},
  {first_name: 'burak', last_name: 'telli'},
  {first_name: 'burak', last_name: 'telli'},
  
];

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class AppListComponent implements OnInit {
  displayedColumns: string[] = ['first_name', 'last_name'];
  public dataSource = ELEMENT_DATA;

  constructor() { }
  @Output() public buttonClick = new EventEmitter();

  ngOnInit(): void {
  }

  addToList(event: any){
    this.buttonClick.emit()
  }

}
