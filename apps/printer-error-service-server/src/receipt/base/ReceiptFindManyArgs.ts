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
import { ReceiptWhereInput } from "./ReceiptWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { ReceiptOrderByInput } from "./ReceiptOrderByInput";

@ArgsType()
class ReceiptFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ReceiptWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => ReceiptWhereInput, { nullable: true })
  @Type(() => ReceiptWhereInput)
  where?: ReceiptWhereInput;

  @ApiProperty({
    required: false,
    type: [ReceiptOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [ReceiptOrderByInput], { nullable: true })
  @Type(() => ReceiptOrderByInput)
  orderBy?: Array<ReceiptOrderByInput>;

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

export { ReceiptFindManyArgs as ReceiptFindManyArgs };
