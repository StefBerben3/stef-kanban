import { Module } from '@nestjs/common';
import { CardModule } from './modules/card/dto/card.module';
import { LaneModule } from './modules/lane/dto/lane.module';
import { UserModule } from './modules/user/dto/user.module';

@Module({
  imports: [CardModule, LaneModule, UserModule],
})
export class AppModule {}
