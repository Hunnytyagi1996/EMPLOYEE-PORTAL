import { Component,OnInit } from '@angular/core';
import { EmpServiceService } from '../emp-service.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit{

  employeeObj : EmployeeObj;
  employeeArr : EmployeeObj[] =[];

   constructor(){
    this.employeeObj= new EmployeeObj();
   
   }

   ngOnInit(): void {
    this.getAllEmpoyee();
     
   }
   onSave(){
    
     const isData = localStorage.getItem("EmpData");
     if(isData ==null){
      const newArr=[];
      this.employeeObj.EmployeeId=0;
      newArr.push(this.employeeObj);
      localStorage.setItem("EmpData", JSON.stringify(newArr));

     } else{
       const oldData= JSON.parse(isData);
       const newId=oldData.length + 1;
       this.employeeObj.EmployeeId=newId;
       oldData.push(this.employeeObj);
       localStorage.setItem("EmpData", JSON.stringify(oldData));

     }
     this.employeeObj= new EmployeeObj();
     this.getAllEmpoyee();
   }
   getAllEmpoyee(){
     const isData=localStorage.getItem("EmpData");
     if(isData != null){
        const localData= JSON.parse(isData);
        this.employeeArr=localData;
     }
   }

   onEdit(item: EmployeeObj){
    this.employeeObj=item;
   }

   onDelete(item:EmployeeObj){
    const isData= localStorage.getItem("EmpData");
    if( isData != null){
      const localData=JSON.parse(isData);
      for( let index=0; index < localData.length; index++ ) {
         if(localData[index].EmployeeId == item.EmployeeId){
          localData.splice(0,1);
         }
      }
      localStorage.setItem("EmpData", JSON.stringify(localData));
      this.getAllEmpoyee();
    }

   }

}

export class EmployeeObj{
  EmployeeId: number ;
  FirstName : string;
  LastName : string;
  Technology : string;
  Designation : string;
  Skill: string;
  Core : string;
  IsCertification : string;
  Certification: string;
  Company: string;
  FewDetails: string;
  constructor(){
           this.EmployeeId=0;
           this.FirstName="";
           this.LastName="";
           this.Technology="";
           this.Designation="";
           this.Skill="";
           this.Core="";
           this.IsCertification="";
           this.Certification="";
           this.Company="";
           this.FewDetails="";

  }
}
