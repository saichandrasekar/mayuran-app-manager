import { Injectable } from '@angular/core';
import { Product } from './models/product.model';

const ELEMENT_DATA: Product[] = [  
  {position: 1, code:'D234',name:'SAP CRM',status:'',applicationCategory:'Sales',manufacturer:'SAP',businessProcess:'Quote to Cash',applicationType:'COTS',applicationFamily:'SAP CRM',architectureType:'Web Based',installType:'Third Party Hosted',technolocyStack:'Netweaver',userBase:'1000+',platform:'Unix',contractEndDate:'2017-03-13',supportVendor:'KPMC',businessCriticality:'Medium',dataClassification:'Confidential',currency:'2 Versions behind',rights:'',productOwner:'', technicalLead:''},
  {position: 2, code:'R345',name:'CCS',status:'',applicationCategory:'Customer Support',manufacturer:'Oracle',businessProcess:'Issue to Resolution',applicationType:'Homegrown',applicationFamily:'Oracle CRM',architectureType:'Client Server',installType:'On Premise',technolocyStack:'PL/SQL',userBase:'600+',platform:'Unix',contractEndDate:'2017-03-13',supportVendor:'Infosys',businessCriticality:'High',dataClassification:'Internal',currency:'3+ Versions behind',rights:'',productOwner:'', technicalLead:''},
  {position: 3, code:'R345',name:'Avid',status:'',applicationCategory:'Customer Support',manufacturer:'Oracle',businessProcess:'Issue to Resolution',applicationType:'Homegrown',applicationFamily:'Oracle CRM',architectureType:'Client Server',installType:'On Premise',technolocyStack:'PL/SQL',userBase:'600+',platform:'Unix',contractEndDate:'2017-03-13',supportVendor:'Infosys',businessCriticality:'High',dataClassification:'Internal',currency:'3+ Versions behind',rights:'',productOwner:'', technicalLead:''},
  {position: 4, code:'R345',name:'Chlors CRM',status:'',applicationCategory:'Customer Support',manufacturer:'Oracle',businessProcess:'Issue to Resolution',applicationType:'Homegrown',applicationFamily:'Oracle CRM',architectureType:'Client Server',installType:'On Premise',technolocyStack:'PL/SQL',userBase:'600+',platform:'Unix',contractEndDate:'2017-03-13',supportVendor:'Infosys',businessCriticality:'High',dataClassification:'Internal',currency:'3+ Versions behind',rights:'',productOwner:'', technicalLead:''},
  {position: 5, code:'R345',name:'CCS',status:'',applicationCategory:'Customer Support',manufacturer:'Oracle',businessProcess:'Issue to Resolution',applicationType:'Homegrown',applicationFamily:'Oracle CRM',architectureType:'Client Server',installType:'On Premise',technolocyStack:'PL/SQL',userBase:'600+',platform:'Unix',contractEndDate:'2017-03-13',supportVendor:'Infosys',businessCriticality:'High',dataClassification:'Internal',currency:'3+ Versions behind',rights:'',productOwner:'', technicalLead:''}
];

@Injectable({
  providedIn: 'root'
})
export class ProductsServiceService {

  products: Product[] = [];

  constructor() { }

  getProducts(): Product[]{
    this.products = ELEMENT_DATA.concat([]);
    return this.products;
  }

  addProduct(product: Product) {
    this.products.concat(product)
  }
}
