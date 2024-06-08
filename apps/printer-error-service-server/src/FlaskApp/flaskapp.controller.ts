import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { FlaskAppService } from "./flaskapp.service";
import { UploadReceiptDto } from "../flaskApp/UploadReceiptDto";
import { ProcessedDataDto } from "../flaskApp/ProcessedDataDto";

@swagger.ApiTags("flaskApps")
@common.Controller("flaskApps")
export class FlaskAppController {
  constructor(protected readonly service: FlaskAppService) {}

  @common.Post("/process-receipt-image")
  @swagger.ApiOkResponse({
    type: ProcessedDataDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async ProcessReceiptImage(
    @common.Body()
    body: UploadReceiptDto
  ): Promise<ProcessedDataDto> {
        return this.service.ProcessReceiptImage(body);
      }

  @common.Get("/:id/upload-receipt")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async UploadReceipt(
    @common.Body()
    body: UploadReceiptDto
  ): Promise<string> {
        return this.service.UploadReceipt(body);
      }

  @common.Post("/upload-receipt-image")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async UploadReceiptImage(
    @common.Body()
    body: UploadReceiptDto
  ): Promise<string> {
        return this.service.UploadReceiptImage(body);
      }
}
