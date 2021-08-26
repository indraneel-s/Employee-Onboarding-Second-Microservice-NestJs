import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert, OneToMany, UsingJoinTableOnlyOnOneSideAllowedError, JoinTable, JoinColumn, CreateDateColumn, PrimaryColumn } from 'typeorm';
import * as crypto from 'crypto';
import { IsNotEmpty } from 'class-validator';
import AddressEntity from 'src/address/entities/address.entity';


@Entity('original_emp')
export class EmployeeEntity {
  @PrimaryColumn()
  employeeId: number;
  @Column({nullable: true})
  
  employeeCode: string;
  @Column()
  @IsNotEmpty()
  firstName: string;
  @Column()
  @IsNotEmpty()
  lastName: string;
  @Column({nullable: true})
  
  dob:string;
  @Column({nullable: true})

  bloodGroup:string;
  @Column({nullable: true})
  aadharNumber:string;
  @Column({nullable: true})
  fatherName:string;
  @Column({nullable: true})
  
  motherName:string;
  @Column()
  @IsNotEmpty()
  emailId:string;
  @Column({nullable: true})
  
  phoneNumber:string;
  @Column({nullable: true})
  
  sslc:number;
  @Column({nullable: true})
  
  hsc:number;
  @Column({nullable: true})
  
  ug:number;
  @Column({nullable: true})
  
  gender:string;
  @Column({nullable: true})
  
  emergencyContactName:string;
  @Column({nullable: true})
  emergencyContactPhoneNumber:string;
  @Column({nullable: true})
  emergencyContactRelation:string
  @OneToMany(() => AddressEntity, (addressEntity: AddressEntity) => addressEntity.emp,{ cascade: ['insert', 'update'] })
  @JoinColumn()
  public addresses: AddressEntity[];
  
}
