import { Injectable } from '@angular/core';
import { Product } from './models/product.model';

const ELEMENT_DATA: Product[] = [
  {code: 'A86S', name: 'Hydrogen', status: "Initiated", productOwner: "Anna",technicalLead: "Anna"},
  {code: 'D456', name: 'Helium', status: "Initiated", productOwner: "Anna",technicalLead: "Anna"},
  {code: 'H786J', name: 'Lithium',status: "Initiated", productOwner: "Anna",technicalLead: "Anna"},
  {code: 'V546', name: 'Beryllium', status: "Initiated", productOwner: "Anna",technicalLead: "Anna"},
  {code: 'E345', name: 'Boron', status: "Initiated", productOwner: "Anna",technicalLead: "Anna"},
  {code: 'A86S', name: 'Carbon', status: "Initiated", productOwner: "Anna",technicalLead: "Anna"},
  {code: 'H786', name: 'Nitrogen', status: "Initiated", productOwner: "Anna",technicalLead: "Anna"},
  {code: 'T46546', name: 'Oxygen', status: "Initiated", productOwner: "Anna",technicalLead: "Anna"},
  {code: 'J576', name: 'Fluorine', status: "Initiated", productOwner: "Anna",technicalLead: "Anna"},
  {code: 'U567', name: 'Neon', status: "Initiated", productOwner: "Anna",technicalLead: "Anna"},
];

@Injectable({
  providedIn: 'root'
})
export class ProductsServiceService {

  constructor() { }

  getProducts(): Product[]{
    return ELEMENT_DATA;
  }
}
