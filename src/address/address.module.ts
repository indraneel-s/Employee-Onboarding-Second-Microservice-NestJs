import { Module } from '@nestjs/common';
import { AddressService } from './address.service';
import { AddressController } from './address.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AddressRepository } from './addressrepo';
import AddressEntity from './entities/address.entity';
import { EmployeeRepository } from 'src/employee/employeerepo';




@Module({
  imports:[TypeOrmModule.forFeature([AddressRepository,AddressEntity,EmployeeRepository])],
  controllers: [AddressController],
  providers: [AddressService,AddressRepository]
})
export class AddressModule {}
