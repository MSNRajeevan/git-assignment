import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Employee } from '../Employee.model';

@Component({
  selector: 'app-emp-entrychild',
  templateUrl: './emp-entrychild.component.html',
  styleUrls: ['./emp-entrychild.component.css']
})
export class EmpEntrychildComponent implements OnInit {

  //to push info to parent component:
  //create an event : something that can push info to parent component
  //Employee is the type of data thar would be pushed to parent
  @Output() dataentry : EventEmitter<Employee>; 
  constructor() { 
    this.dataentry=new EventEmitter();
  }

  save(id: HTMLInputElement,name:HTMLInputElement,email:HTMLInputElement,dept:HTMLInputElement):void{
    //let emp=new Employee(parseInt(id.value),name.value,email.value,dept.value);
    //this.dataentry.emit(emp);
    this.dataentry.emit(new Employee(parseInt(id.value),name.value,email.value,dept.value));

    id.value="";
    name.value="";
    email.value="";
    dept.value="";
  }

  ngOnInit() {
  }

}
