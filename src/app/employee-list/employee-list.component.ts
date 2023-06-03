import { Component, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Employee } from '../common/employee';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
  providers: [EmployeeService],
})
export class EmployeeListComponent {
  employees!: Employee[];
  id!: number;

  constructor(
    private empService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    empService.getEmployees().subscribe((data) => {
      this.employees = data;
    });
  }

  deleteEmployee(deleteEl: HTMLAnchorElement) {
    // if (window.confirm('Are sure you want to delete this item ?')) {
    this.empService.deleteEmployee(+deleteEl.name).subscribe((data) => {
      console.log('Deleted' + data);
      this.empService.getEmployees().subscribe((data) => {
        this.employees = data;
      });
    });
    //}
  }
}
