import { Component } from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import {Observable, ReplaySubject} from 'rxjs';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import { Router } from '@angular/router';
import { ProductsServiceService } from '../products-service.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  standalone: true,
  imports: [MatButtonModule, MatTableModule]
})
export class ProductsComponent {

constructor(private productsService: ProductsServiceService, private router: Router){
  this.dataToDisplay = this.productsService.getProducts();
  this.dataSource.setData(this.dataToDisplay);
}


  displayedColumns: string[] = ['code', 'name','status', 'productOwner', 'technicalLead'];
  dataToDisplay: Product[] = [];

  dataSource = new ExampleDataSource(this.dataToDisplay);

  addData() {
    this.router.navigateByUrl('/products');
  }

  removeData() {
    this.dataToDisplay = this.dataToDisplay.slice(0, -1);
    this.dataSource.setData(this.dataToDisplay);
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
