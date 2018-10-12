import { Component, OnInit } from '@angular/core';
import { Employee } from '../Employee.model';

@Component({
  selector: 'app-emp-tag',
  templateUrl: './emp-tag.component.html',
  styleUrls: ['./emp-tag.component.css']
})
export class EmpTagComponent {

  //list a of employees in which new employees can added
  //from entry form
  employees:Employee[];
  constructor() { 
      this.employees=[
          new Employee(1,"First","first@mail.com","HR"),
          new Employee(2,"Second","second@mail.com","IT")
      ];
  }

  //what are the types 
  save(id: HTMLInputElement,name:HTMLInputElement,email:HTMLInputElement,dept:HTMLInputElement):void{
    //add to existing employee collection
    //send the new employee info to server ....
    this.employees.push(new Employee(parseInt(id.value),name.value,email.value,dept.value));
    id.value="";
    name.value="";
    email.value="";
    dept.value="";
  }

 
}
