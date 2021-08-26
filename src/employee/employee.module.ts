import { Module } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { EmployeeController } from './employee.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeeRepository } from './employeerepo';
import { AddressRepository } from 'src/address/addressrepo';
import { EmployeeEntity } from './entities/employee.entity';
import AddressEntity from 'src/address/entities/address.entity';



@Module({
  imports: [TypeOrmModule.forFeature([EmployeeRepository,AddressRepository,EmployeeEntity,AddressEntity])],
  controllers: [EmployeeController],
  providers: [EmployeeService],
})
export class EmployeeModule {}
