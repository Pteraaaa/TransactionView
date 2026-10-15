import { Type } from "class-transformer";
import { IsDate, IsInt, IsOptional, IsString } from "class-validator";

export class CreateTransactionDto {
    @IsOptional()
    @Type(() => Number)
    @IsInt()
    id?: number;

    @IsString()
    productID: string;

    @IsString()
    productName: string;

    @Type(() => Number)
    @IsInt()
    amount: number;

    @IsString()
    customerName: string

    @IsOptional()
    @Type(() => Number)
    @IsInt()
    status?: number

    @Type(() => Date)
    @IsDate()
    @IsOptional()
    transactionDate?: Date

    @IsString()
    createBy: string

    @IsOptional()
    @Type(() => Date)
    @IsDate()
    createOn?: Date
}
