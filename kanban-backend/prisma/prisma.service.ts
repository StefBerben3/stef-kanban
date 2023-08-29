import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService {
  [x: string]: any;
  client: PrismaClient;
  card: any;

  constructor() {
    this.client = new PrismaClient();
    this.card = this.client.card;
  }
}
