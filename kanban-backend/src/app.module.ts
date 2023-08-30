import { Module } from '@nestjs/common';
import { CardController } from './modules/card/card.controller';
import { CardModule } from './modules/card/card.module';
import { CardRepository } from './modules/card/card.repository';
import { CardService } from './modules/card/card.service';
import { LaneController } from './modules/lane/lane.controller';
import { laneModule } from './modules/lane/lane.module';
import { LaneRepository } from './modules/lane/lane.repository';
import { LaneService } from './modules/lane/lane.service';

@Module({
  imports: [CardModule, laneModule],
  controllers: [LaneController, CardController],
  providers: [CardService, LaneService, CardRepository, LaneRepository],
})
export class AppModule {}
