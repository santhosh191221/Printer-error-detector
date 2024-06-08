import { Injectable } from "@nestjs/common";
import { UploadReceiptDto } from "../flaskApp/UploadReceiptDto";
import { ProcessedDataDto } from "../flaskApp/ProcessedDataDto";

@Injectable()
export class FlaskAppService {
  constructor() {}
  async ProcessReceiptImage(args: UploadReceiptDto): Promise<ProcessedDataDto> {
    throw new Error("Not implemented");
  }
  async UploadReceipt(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async UploadReceiptImage(args: UploadReceiptDto): Promise<string> {
    throw new Error("Not implemented");
  }
}
