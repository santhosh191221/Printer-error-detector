import * as graphql from "@nestjs/graphql";
import { UploadReceiptDto } from "../flaskApp/UploadReceiptDto";
import { ProcessedDataDto } from "../flaskApp/ProcessedDataDto";
import { FlaskAppService } from "./flaskapp.service";

export class FlaskAppResolver {
  constructor(protected readonly service: FlaskAppService) {}

  @graphql.Mutation(() => ProcessedDataDto)
  async ProcessReceiptImage(
    @graphql.Args()
    args: UploadReceiptDto
  ): Promise<ProcessedDataDto> {
    return this.service.ProcessReceiptImage(args);
  }

  @graphql.Query(() => String)
  async UploadReceipt(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.UploadReceipt(args);
  }

  @graphql.Mutation(() => String)
  async UploadReceiptImage(
    @graphql.Args()
    args: UploadReceiptDto
  ): Promise<string> {
    return this.service.UploadReceiptImage(args);
  }
}
