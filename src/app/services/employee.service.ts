import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../common/employee';
import { Deleteref } from '../common/delete-ref';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private http: HttpClient) {}

  getEmployeeById(id: number) {
    return this.http.get<Employee>('http://localhost:8080/api/employees/' + id);
  }

  getEmployees() {
    return this.http.get<Employee[]>('http://localhost:8080/api/employees');
  }

  addOrUpdateEmployee(emp: Employee) {
    return this.http.post<Employee>('http://localhost:8080/api/employees', emp);
  }

  deleteEmployee(id: number) {
    return this.http.delete<{ deleted: boolean }>(
      'http://localhost:8080/api/employees/' + id
    );
  }
}
