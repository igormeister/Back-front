import { Module } from '@nestjs/common';
import { ClientModule, BasketModule, AuctionModule, LotModule } from './client/client.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [ClientModule, BasketModule, AuctionModule, LotModule],
})
export class AppModule {}
