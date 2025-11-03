import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateAuthorDto {
  @IsOptional()
  @IsString()
  bio?: string;

  @IsNumber()
  @IsNotEmpty()
  userId!: number;
}
