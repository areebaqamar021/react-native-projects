import { IsEmail, IsNotEmpty, IsDateString } from 'class-validator';

export class CreatePharmacyDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  address: string;

  @IsNotEmpty()
  city: string;

  @IsEmail()
  email: string;

  @IsDateString()
  dateOfEstablishment: string;
}
