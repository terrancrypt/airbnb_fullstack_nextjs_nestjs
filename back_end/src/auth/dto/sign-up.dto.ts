import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsEmail, IsStrongPassword } from 'class-validator';
import { Role } from 'src/users/enums/role.enum';

export class SignUpDto {
  @ApiProperty({
    example: 'John',
  })
  @IsNotEmpty()
  fullName: string;

  @ApiProperty({
    example: 'john@gmail.com',
  })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({
    example: 'John@123',
  })
  @IsNotEmpty()
  @IsStrongPassword({
    minLength: 8,
    minLowercase: 1,
    minUppercase: 1,
    minNumbers: 1,
    minSymbols: 1,
  })
  passWord: string;

  phoneNumber?: string;

  birthday?: string;

  gender?: string;

  role: Role.User;
}
