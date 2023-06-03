import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Employee } from '../common/employee';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css'],
})
export class UpdateEmployeeComponent {
  employee!: Employee;
  id!: number;

  constructor(
    private empService: EmployeeService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.id = +this.route.snapshot.params['id'];
    empService.getEmployeeById(this.id).subscribe((data) => {
      this.employee = data;
    });
  }

  updateEmployee(form: NgForm) {
    if (form.invalid) {
      return;
    }

    this.employee.firstName = form.controls['firstName'].value;
    this.employee.lastName = form.controls['lastName'].value;
    this.employee.email = form.controls['email'].value;

    this.empService.addOrUpdateEmployee(this.employee).subscribe(() => {
      this.router.navigate(['']);
    });
  }
}
