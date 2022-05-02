import { CacheModule, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { SeedsModule } from './database';
import { ProgressModule } from './modules';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.DATABASE_URI),
    CacheModule.register(),
    ProgressModule,
    SeedsModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
