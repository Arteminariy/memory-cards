import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateTypeDto } from './dto/create-type.dto';
import { UpdateTypeDto } from './dto/update-type.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Type } from './entities/type.entity';

@Injectable()
export class TypesService {
  constructor(@InjectModel(Type) private typeRepository: typeof Type) {}

  async create(createTypeDto: CreateTypeDto) {
    try {
      const type = await this.typeRepository.create(createTypeDto);
      if (!type) {
        return new HttpException(
          'Не удалось создать тип',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
      return type;
    } catch (error) {
      return new HttpException(
        'Не удалось создать тип',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findAll() {
    try {
      const types = await this.typeRepository.findAll();
      if (!types) {
        return new HttpException(
          'Не удалось получить типы',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
      return types;
    } catch (error) {
      return new HttpException(
        'Не удалось получить типы',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} type`;
  }

  update(id: number, updateTypeDto: UpdateTypeDto) {
    return `This action updates a #${id} type`;
  }

  remove(id: number) {
    return `This action removes a #${id} type`;
  }
}
