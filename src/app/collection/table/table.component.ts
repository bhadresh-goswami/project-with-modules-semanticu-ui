import { Component, Input } from '@angular/core';
import { tableHeader } from 'src/app/models/table-header.model';
import { tableData } from 'src/app/models/table.model';
//src\app\data\table-data.json
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent {
  @Input() tableHeader: tableHeader[] = [];
  @Input() tableData: tableData[] = [];
  constructor() {}
}
