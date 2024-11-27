import { IsEmail, IsNotEmpty, IsString } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';

export class TaskDTO{
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    readonly actividad: string;
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    readonly descripcion: string;
}