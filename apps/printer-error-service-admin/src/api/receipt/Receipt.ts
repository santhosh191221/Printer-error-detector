import { JsonValue } from "type-fest";

export type Receipt = {
  createdAt: Date;
  id: string;
  image: JsonValue;
  processedData: JsonValue;
  updatedAt: Date;
};
