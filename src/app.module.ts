import { Module } from '@nestjs/common';
import { CardsModule } from './cards/cards.module';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { Card } from './cards/entities/card.entity';

@Module({
  imports: [
    CardsModule,
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: String(process.env.POSTGRES_PASSWORD),
      database: process.env.POSTGRES_DB,
      models: [Card],
      autoLoadModels: true,
      synchronize: true,
    }),
    Card,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
