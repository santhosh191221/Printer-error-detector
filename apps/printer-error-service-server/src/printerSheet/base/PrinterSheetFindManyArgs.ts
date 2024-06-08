/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { PrinterSheetWhereInput } from "./PrinterSheetWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { PrinterSheetOrderByInput } from "./PrinterSheetOrderByInput";

@ArgsType()
class PrinterSheetFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => PrinterSheetWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => PrinterSheetWhereInput, { nullable: true })
  @Type(() => PrinterSheetWhereInput)
  where?: PrinterSheetWhereInput;

  @ApiProperty({
    required: false,
    type: [PrinterSheetOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [PrinterSheetOrderByInput], { nullable: true })
  @Type(() => PrinterSheetOrderByInput)
  orderBy?: Array<PrinterSheetOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { PrinterSheetFindManyArgs as PrinterSheetFindManyArgs };
