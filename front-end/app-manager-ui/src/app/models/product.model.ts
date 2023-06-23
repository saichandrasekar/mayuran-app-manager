import { Application } from "./application.model";

export interface Product {
    code: string;
    name: string;
    status: string;

   
    applicationCategory?: string;
    manufacturer?: string;
    businessProcess?: string;
    applicationType?: string;
    applicationFamily?: string;
    architectureType?: string;
    installType?: string;
    technolocyStack?: string;
    userBase?: string;
    platform?: string;
    contractEndDate?: string;
    supportVendor?: string;
    businessCriticality?: string;
    dataClassification ?: string;
    currency?: string;
    rights?: string;
    position: number;



    productOwner: string;
    technicalLead: string;    
    application?: Application
  }