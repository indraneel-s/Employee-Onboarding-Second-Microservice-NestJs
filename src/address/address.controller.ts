import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AddressService } from './address.service';


@Controller('address')
export class AddressController {
  constructor(private readonly addressService: AddressService) {}


}
