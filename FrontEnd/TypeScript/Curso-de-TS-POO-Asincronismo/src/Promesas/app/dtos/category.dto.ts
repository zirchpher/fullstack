// Decoradores
// A diferencia de TypeScript, los decoradores No van a decir los errores de forma inmediata. Dan feedback hasta el runtime.
// Agregan validaciones y comportamientos extra

import {
    IsEnum,
    IsNotEmpty,
    IsOptional,
    IsUrl,
    Length,
    validateOrReject,
} from 'class-validator';
// Cosas importantes sobre class-validator
// isEmail => si empieza con minúscula, es una función
// IsEmail => si empieza con mayúscula, es un decorador

import { AccessType, Category } from '../model/category.model';

export interface ICreateCategoryDto extends Omit<Category, 'id'> {}

export class CreateCategoryDto implements ICreateCategoryDto {
    @IsNotEmpty()
    @Length(4, 140)
    name!: string;

    @IsUrl()
    @IsNotEmpty()
    image!: string;

    @IsOptional()
    @IsEnum(AccessType)
    access?: AccessType | undefined;
}

(async function () {
    try {
        const dto = new CreateCategoryDto();
        dto.name = 'Remmian';
        dto.image = 'https://api.escuelajs.co/api/v1/products';
        await validateOrReject(dto);
    } catch (error) {
        console.log(error);
    }
})();
