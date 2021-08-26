import { Exclude } from "class-transformer";
import { IsNotEmpty } from "class-validator";
import { Address } from "node:cluster";
import AddressEntity from "src/address/entities/address.entity";
import { Double } from "typeorm";

export class EmployeeDTO {

    employeeId: number;
    employeeCode: string;
    @IsNotEmpty()
    firstName: string;
    @IsNotEmpty()
    lastName: string;
    @IsNotEmpty()
    dob:string;
    @IsNotEmpty()
    bloodGroup:string;
    @IsNotEmpty()
    aadharNumber:string;
    @IsNotEmpty()
    fatherName:string;
    @IsNotEmpty()
    motherName:string;
    @IsNotEmpty()
    emailId:string;
    @IsNotEmpty()
    phoneNumber:string;
    @IsNotEmpty()
    sslc:number;
    @IsNotEmpty()
    hsc:number;
    @IsNotEmpty()
    ug:number;
    @IsNotEmpty()
    gender:string;
    @IsNotEmpty()
    emergencyContactName:string;
    @IsNotEmpty()
    emergencyContactPhoneNumber:string;
    @IsNotEmpty()
    emergencyContactRelation:string
    @IsNotEmpty()
    public addresses: AddressEntity[];

    

  }