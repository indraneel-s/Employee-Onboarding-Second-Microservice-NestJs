import { Query } from "@nestjs/common";
import { EntityRepository, Repository } from "typeorm";
import { EmployeeEntity } from "./entities/employee.entity";

@EntityRepository(EmployeeEntity)
export class EmployeeRepository extends Repository<EmployeeEntity> {
    findByEmail(emailId: string): Promise<EmployeeEntity>{
        return this.findOne({ emailId });
    }
    findByEmployeeId(){
                                            
    }
    
    

    
}