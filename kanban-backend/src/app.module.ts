import { Module } from '@nestjs/common';
import { CardModule } from './modules/card/card.module';
import { LaneModule } from './modules/lane/lane.module';

@Module({
  imports: [CardModule, LaneModule],
})
export class AppModule {}
