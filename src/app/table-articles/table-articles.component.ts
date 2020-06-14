import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource,MatPaginator, MatSort } from '@angular/material';
import { TableArticlesDataSource } from './table-articles-datasource';
import { DataSource } from '@angular/cdk/table';

@Component({
  selector: 'cc-table-articles',
  templateUrl: './table-articles.component.html',
  styleUrls: ['./table-articles.component.css']
})
export class TableArticlesComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: TableArticlesDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngOnInit() {
    this.dataSource = new TableArticlesDataSource(this.paginator, this.sort);
  }
}
