import { ObjectType, Field } from "@nestjs/graphql";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../types";

@ObjectType("ProcessedDataDtoObject")
class ProcessedDataDto {
    @Field(() => GraphQLJSON)
    processedData!: InputJsonValue;
}

export { ProcessedDataDto as ProcessedDataDto };