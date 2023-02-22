import { Component, OnInit } from '@angular/core';
import { tableHeader } from 'src/app/models/table-header.model';
import { tableData } from 'src/app/models/table.model';

//table data loaded from
import Data from '../../data/table-data.json';
import Header from '../../data/table-header.json';

@Component({
  selector: 'app-collection-home',
  templateUrl: './collection-home.component.html',
  styleUrls: ['./collection-home.component.css'],
})
export class CollectionHomeComponent {
  //object hold the data for the table
  tableHeader: tableHeader[] = [];
  tableData: tableData[] = [];
  ngOnInit() {
    Header.forEach((data) => {
      let head: tableHeader = { key: data.key, label: data.label };
      this.tableHeader.push(head);
    });
    Data.forEach((data) => {
      let tr: tableData = {
        id: data.id,
        name: data.name,
        designation: data.designation,
      };
      this.tableData.push(tr);
    });
  }
}
