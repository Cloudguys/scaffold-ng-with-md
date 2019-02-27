import { OnInit, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource, MatPaginator } from '@angular/material';
import { AppComponentBase } from './app-base.component';
import { SelectionModel } from '@angular/cdk/collections';

export abstract class tableDataReqeust {
  skip: number;
  volumn: number;
  orderBy: string;
}

export abstract class TableComponentBase extends AppComponentBase implements OnInit {


  paginated: boolean;
  sorted: boolean;

  dataSource: MatTableDataSource<any>;
  selection = new SelectionModel<any>(true, []);

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator

  constructor() {
    super();
  }

  ngOnInit() {
    this.refresh();
    this.applyPaginator();
    this.applySort();
  }

  refresh() {
    // some other options
    this.fetchData(this.resetAllStatus);
  }

  resetAllStatus() {
    // filter
    // sort
    // pagination
    // selection
  }

  protected abstract fetchData(finishedCallback): void

  useSort() {
    this.sorted = true;
  }

  usePaginator() {
    this.paginated = true;
  }

  applySort() {
    if (this.sorted) {
      this.dataSource.sort = this.sort;
    }
  }

  applyPaginator() {
    if (this.paginated) {
      this.dataSource.paginator = this.paginator;
    }
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }
}
