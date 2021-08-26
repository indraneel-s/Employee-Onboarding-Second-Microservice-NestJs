import { Injectable, HttpStatus, UseInterceptors, ClassSerializerInterceptor } from '@nestjs/common';
    import { InjectRepository } from '@nestjs/typeorm';
import { EmployeeDTO } from 'src/employee/dto/EmployeeDTO';
import { AddressRepository } from 'src/address/addressrepo';
    import { createQueryBuilder, getConnection, getManager, IsNull, Repository } from 'typeorm';
import { EmployeeRepository } from './employeerepo';
import { EmployeeEntity } from './entities/employee.entity';

   

    
@Injectable()
export class EmployeeService {
  constructor(
 
    private employeeRepository: EmployeeRepository,
    private addressRepository:AddressRepository,

   

  ) 
  {}
  @UseInterceptors(ClassSerializerInterceptor)
async showAll() {

let employees = await this.employeeRepository.find({ relations: ["addresses"] });


return employees;
}





      async read(employeeId: number) {
        return await this.employeeRepository.findOne(
          { where: { employeeId: employeeId },relations: ["addresses"] }
          );
      }

      async update(employeeId:number,data: EmployeeDTO) {
     
  
       

        let id=data.employeeId
        const existuser : EmployeeEntity= await this.employeeRepository.findOne({where:{employeeId:id}
    
        });
      
     if(existuser)
     {
      let addresses=data.addresses
      delete data.addresses
      let employee=this.read(employeeId);
      await this.employeeRepository.update({employeeId},data)
      let addressId=(await employee).addresses[0].addressId
      await this.addressRepository.update({addressId},addresses[0])
      addressId= (await employee).addresses[1].addressId
      await this.addressRepository.update({addressId},addresses[1])
     }
       else{
         await this.employeeRepository.save(data)
       }

    
        
        

       
      
    
        

      

    
   }
   




    
    }
  
