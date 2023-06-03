import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Employee } from '../common/employee';
import { Router } from '@angular/router';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css'],
})
export class AddEmployeeComponent {
  emp!: Employee;

  constructor(private empService: EmployeeService, private router: Router) {}

  addEmployee(form: NgForm) {
    if (form.valid) {
      this.empService.addOrUpdateEmployee(form.value).subscribe(() => {
        this.router.navigate(['']);
      });
    }
  }
}
