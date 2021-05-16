import { Component, OnInit } from '@angular/core';
import { TableService } from './../../services/table.service';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss'],
})
export class DatatableComponent implements OnInit {
  displayedColumns: string[] = ['firstname', 'lastname', 'username', 'email'];
  public dataSource;
  public dataContent = [];
  public errorMessage;
  public loading = false;

  constructor(private tableService: TableService) {}

  ngOnInit(): void {
    this.loading = true;
    this.tableService.getTable().subscribe(
      (data) => {
        this.dataSource = data;
        this.dataContent = this.dataSource.data;
        this.loading = false;
      },
      (error) => {
        this.errorMessage = error;
        this.loading = false;
      }
    );
  }
  public value: string = '';

  onSubmit() {
    this.loading = true;
    this.tableService.getGenderTable(this.value).subscribe(
      (data) => {
        this.dataSource = data;
        this.dataContent = this.dataSource.data;
        this.loading = false;
      },
      (error) => {
        this.errorMessage = error;
        this.loading = false;
      }
    );
  }
}
