import { Module } from '@nestjs/common';
import { TypesService } from './types.service';
import { TypesController } from './types.controller';
import { Type } from './entities/type.entity';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [SequelizeModule.forFeature([Type])],
  controllers: [TypesController],
  providers: [TypesService],
})
export class TypesModule {}
