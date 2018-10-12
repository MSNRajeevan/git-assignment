import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../Employee.model';

@Component({
  selector: 'app-emp-show',
  templateUrl: './emp-show.component.html',
  styleUrls: ['./emp-show.component.css']
})
export class EmpShowComponent implements OnInit {
 
  //responsible to show list
  //does not have collection(collection is available with emp-entry)
  //special annotation/decorator available to fetch data
  @Input() dummy_employees:Employee[];  // fetch employee collection from emp-entry
  constructor() { }

  ngOnInit() {
  }

}
