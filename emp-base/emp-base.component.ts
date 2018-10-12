import { Component, OnInit } from '@angular/core';
import { Employee } from '../Employee.model';

@Component({
  selector: 'app-emp-base',
  templateUrl: './emp-base.component.html',
  styleUrls: ['./emp-base.component.css']
})
export class EmpBaseComponent implements OnInit {

  //hold the collection
  employees:Employee[];
  constructor() { 
    this.employees=[
      new Employee(1,"First","first@mail.com","HR"),
      new Employee(2,"Second","second@mail.com","IT")
  ];

  }


  addNewRecord(employee:Employee): void{
    this.employees.push(employee);
  }

  ngOnInit() {
  }

}
