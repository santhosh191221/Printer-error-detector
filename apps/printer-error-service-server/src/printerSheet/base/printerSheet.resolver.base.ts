/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { PrinterSheet } from "./PrinterSheet";
import { PrinterSheetCountArgs } from "./PrinterSheetCountArgs";
import { PrinterSheetFindManyArgs } from "./PrinterSheetFindManyArgs";
import { PrinterSheetFindUniqueArgs } from "./PrinterSheetFindUniqueArgs";
import { CreatePrinterSheetArgs } from "./CreatePrinterSheetArgs";
import { UpdatePrinterSheetArgs } from "./UpdatePrinterSheetArgs";
import { DeletePrinterSheetArgs } from "./DeletePrinterSheetArgs";
import { PrinterSheetService } from "../printerSheet.service";
@graphql.Resolver(() => PrinterSheet)
export class PrinterSheetResolverBase {
  constructor(protected readonly service: PrinterSheetService) {}

  async _printerSheetsMeta(
    @graphql.Args() args: PrinterSheetCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [PrinterSheet])
  async printerSheets(
    @graphql.Args() args: PrinterSheetFindManyArgs
  ): Promise<PrinterSheet[]> {
    return this.service.printerSheets(args);
  }

  @graphql.Query(() => PrinterSheet, { nullable: true })
  async printerSheet(
    @graphql.Args() args: PrinterSheetFindUniqueArgs
  ): Promise<PrinterSheet | null> {
    const result = await this.service.printerSheet(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => PrinterSheet)
  async createPrinterSheet(
    @graphql.Args() args: CreatePrinterSheetArgs
  ): Promise<PrinterSheet> {
    return await this.service.createPrinterSheet({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => PrinterSheet)
  async updatePrinterSheet(
    @graphql.Args() args: UpdatePrinterSheetArgs
  ): Promise<PrinterSheet | null> {
    try {
      return await this.service.updatePrinterSheet({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => PrinterSheet)
  async deletePrinterSheet(
    @graphql.Args() args: DeletePrinterSheetArgs
  ): Promise<PrinterSheet | null> {
    try {
      return await this.service.deletePrinterSheet(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
