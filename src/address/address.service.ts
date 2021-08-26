import { ClassSerializerInterceptor, Injectable, UseInterceptors } from '@nestjs/common';
import { EmployeeRepository } from 'src/employee/employeerepo';
import { EmployeeDTO } from 'src/employee/dto/EmployeeDTO';
import { AddressRepository } from './addressrepo';
@Injectable()
export class AddressService {
  constructor(
     
    private employeeRepository: EmployeeRepository
  ) 
  {}
  
}
