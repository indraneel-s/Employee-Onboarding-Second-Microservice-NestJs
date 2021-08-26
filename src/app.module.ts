import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AddressModule } from './address/address.module';
import { EmployeeEntity } from './employee/entities/employee.entity';
import AddressEntity from './address/entities/address.entity';
import { EmployeeModule } from './employee/employee.module';






@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'bank',
    entities: [EmployeeEntity,AddressEntity],
    synchronize: true,
    
  }),EmployeeModule, AddressModule],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
