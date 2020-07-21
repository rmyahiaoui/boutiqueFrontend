import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { TableArticlesDataSource } from './table-articles-datasource';
import { DataSource } from '@angular/cdk/table';
import { ScheduleService } from "../services/schedule.service";
export interface TableArticlesItem {
  id: number;
  marque: string;
  type: string;
  prix: number;
  couleur: string;
  date_vente: string
}
@Component({
  selector: 'cc-table-articles',
  templateUrl: './table-articles.component.html',
  styleUrls: ['./table-articles.component.css']
})
export class TableArticlesComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  data: TableArticlesItem[];

  dataSource= new MatTableDataSource<TableArticlesItem>(this.data);
  displayedColumns = ['id', 'marque', 'type', 'prix', 'couleur', 'date_vente'];

  constructor(private scheduleService: ScheduleService) { }
  
  ngOnInit(){
    this.getAllEvents();
  }
  
  public getAllEvents() {
    this.scheduleService
        .getAllEvents().subscribe(
          data => {
            console.log(data);
            this.dataSource.data = data as TableArticlesItem[];
          });
  }
}
