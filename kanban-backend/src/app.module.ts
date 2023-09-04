import { Module } from '@nestjs/common';
import { CardModule } from './modules/card/card.module';
import { LaneModule } from './modules/lane/lane.module';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [CardModule, LaneModule, UserModule],
})
export class AppModule {}
