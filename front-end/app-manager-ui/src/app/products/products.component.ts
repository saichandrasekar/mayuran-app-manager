import { Component } from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import {Observable, ReplaySubject} from 'rxjs';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule, MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';
import { ProductsServiceService } from '../products-service.service';
import { Product } from '../models/product.model';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {SelectionModel} from '@angular/cdk/collections';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  standalone: true,
  imports: [MatButtonModule, MatTableModule, MatCheckboxModule]
})
export class ProductsComponent {

constructor(private productsService: ProductsServiceService, private router: Router){
  //this.dataToDisplay = this.productsService.getProducts();
  //this.dataSource = new MatTableDataSource<Product>([]);
}


  displayedColumns: string[] = ['select','name','applicationCategory','manufacturer','businessProcess','applicationType','applicationFamily','architectureType','installType','technolocyStack','userBase','platform','contractEndDate','supportVendor','businessCriticality','dataClassification','currency','rights'];
  //dataToDisplay: Product[] = [];

  //dataSource = new ExampleDataSource(this.dataToDisplay);
  dataToDisplay = this.productsService.getProducts();
  dataSource = new MatTableDataSource<Product>(this.dataToDisplay);

  selection = new SelectionModel<Product>(true, []);
  addData() {
    this.router.navigateByUrl('/products');
  }

  removeData() {
    this.dataToDisplay = this.dataToDisplay.slice(0, -1);
    //this.dataSource.setData(this.dataToDisplay);
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
  checkboxLabel(row?: Product): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }
}

class ExampleDataSource extends DataSource<Product> {
  private _dataStream = new ReplaySubject<Product[]>();

  constructor(initialData: Product[]) {
    super();
    this.setData(initialData);
  }

  connect(): Observable<Product[]> {
    return this._dataStream;
  }

  disconnect() {}

  setData(data: Product[]) {
    this._dataStream.next(data);
  }
}

// /**
//  * @title Basic toolbar
//  */
// @Component({
//   selector: 'toolbar-basic-example',
//   templateUrl: 'toolbar-basic-example.html',
//   styleUrls: ['toolbar-basic-example.css'],
//   standalone: true,
//   imports: [MatToolbarModule, MatButtonModule, MatIconModule],
// })
// export class ToolbarBasicExample {}
