import { Injectable } from '@angular/core';
import { Process } from '../models/process.model';


const ELEMENT_DATA: Process[] = [  
  {position:1 ,title:'',path:'',itemType:'',revisionHistory:'',relatedProcesses:'',riskAndMitigationStrategy:'',performanceMeasure:'',technologyAndTools:'',inputsAndOutputs:'',decisionPoints:'',processSteps:'',stackholders:'',processOwner:'',description:''},
  {position:2 ,title:'',path:'',itemType:'',revisionHistory:'',relatedProcesses:'',riskAndMitigationStrategy:'',performanceMeasure:'',technologyAndTools:'',inputsAndOutputs:'',decisionPoints:'',processSteps:'',stackholders:'',processOwner:'',description:''}
];

@Injectable({
  providedIn: 'root'
})
export class ProcessService {

  processes: Process[] = [];

  constructor() { }

  getProcesses(): Process[]{
    this.processes = ELEMENT_DATA.concat([]);
    return this.processes;
  }

  addProcess(process: Process) {
    this.processes.concat(process)
  }
}
