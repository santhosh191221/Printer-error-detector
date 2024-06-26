/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Receipt as PrismaReceipt } from "@prisma/client";

export class ReceiptServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.ReceiptCountArgs, "select">): Promise<number> {
    return this.prisma.receipt.count(args);
  }

  async receipts<T extends Prisma.ReceiptFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ReceiptFindManyArgs>
  ): Promise<PrismaReceipt[]> {
    return this.prisma.receipt.findMany<Prisma.ReceiptFindManyArgs>(args);
  }
  async receipt<T extends Prisma.ReceiptFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.ReceiptFindUniqueArgs>
  ): Promise<PrismaReceipt | null> {
    return this.prisma.receipt.findUnique(args);
  }
  async createReceipt<T extends Prisma.ReceiptCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ReceiptCreateArgs>
  ): Promise<PrismaReceipt> {
    return this.prisma.receipt.create<T>(args);
  }
  async updateReceipt<T extends Prisma.ReceiptUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ReceiptUpdateArgs>
  ): Promise<PrismaReceipt> {
    return this.prisma.receipt.update<T>(args);
  }
  async deleteReceipt<T extends Prisma.ReceiptDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.ReceiptDeleteArgs>
  ): Promise<PrismaReceipt> {
    return this.prisma.receipt.delete(args);
  }
}
