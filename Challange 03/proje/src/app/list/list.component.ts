import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class AppListComponent implements OnInit {
  displayedColumns: string[] = ['first_name', 'last_name'];
  public dataSource = [];

  constructor() { }

  @Input() set data(value: any) {
    this.dataSource = value
  }

  @Output() public buttonClick = new EventEmitter();

  ngOnInit(): void {
  }

  addToList(event: any) {
    this.buttonClick.emit()
  }

}
