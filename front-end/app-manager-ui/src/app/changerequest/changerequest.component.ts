import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import {Observable, ReplaySubject} from 'rxjs';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule, MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';

import {MatCheckboxModule} from '@angular/material/checkbox';
import {SelectionModel} from '@angular/cdk/collections';

import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { Process } from '../models/process.model';
import { ProcessService } from '../services/process-service.service';


@Component({
  selector: 'app-changerequest',
  templateUrl: './changerequest.component.html',
  styleUrls: ['./changerequest.component.css'],
  standalone: true,
  imports: [MatButtonModule, MatCheckboxModule,MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule],
})
export class ChangeRequestComponent implements AfterViewInit {
  displayedColumns: string[] = ['path','itemType','revisionHistory','relatedProcesses','riskAndMitigationStrategy','performanceMeasure','technologyAndTools','inputsAndOutputs','decisionPoints','processSteps','stackholders','processOwner','description','title','select'].reverse(); 
  dataSource : MatTableDataSource<Process>;
  selection = new SelectionModel<Process>(true, []);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;  

  constructor(private processService: ProcessService, private router: Router){
    let dataToDisplay = this.processService.getProcesses();
    console.log('test here');
    this.dataSource = new MatTableDataSource<Process>(dataToDisplay);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  
  addData() {
    this.router.navigateByUrl('/changerequestdetail');
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }
    this.selection.select(...this.dataSource.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: Process): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }
}

class ExampleDataSource extends DataSource<Process> {
  private _dataStream = new ReplaySubject<Process[]>();

  constructor(initialData: Process[]) {
    super();
    this.setData(initialData);
  }

  connect(): Observable<Process[]> {
    return this._dataStream;
  }

  disconnect() {}

  setData(data: Process[]) {
    this._dataStream.next(data);
  }
}