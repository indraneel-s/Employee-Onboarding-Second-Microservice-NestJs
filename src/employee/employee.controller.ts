import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { HttpStatus } from '@nestjs/common';
import { EmployeeDTO } from 'src/employee/dto/EmployeeDTO';

@Controller('employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  

    @Put()
    async uppdateUser(@Body() data: EmployeeDTO) {
         

      await this.employeeService.update(data.employeeId, data);
      return {
        statusCode: HttpStatus.OK,
        message: 'User updated successfully',
      };
    }
  


}
