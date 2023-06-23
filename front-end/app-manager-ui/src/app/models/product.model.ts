import { Application } from "./application.model";

export interface Product {
    code: string;
    name: string;
    status: string;
    productOwner: string;
    technicalLead: string;    
    application?: Application
  }