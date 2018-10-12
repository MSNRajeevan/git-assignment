import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../Employee.model';

@Component({
  selector: 'app-emp-showchild',
  templateUrl: './emp-showchild.component.html',
  styleUrls: ['./emp-showchild.component.css']
})
export class EmpShowchildComponent implements OnInit {

  @Input()  dummy_employees:Employee[];
  constructor() { }

  ngOnInit() {
  }

}
