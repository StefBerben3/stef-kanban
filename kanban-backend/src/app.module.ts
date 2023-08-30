import { Module } from '@nestjs/common';
import { CardModule } from './modules/card/card.module';
import { laneModule } from './modules/lane/lane.module';

@Module({
  imports: [CardModule, laneModule],
})
export class AppModule {}
