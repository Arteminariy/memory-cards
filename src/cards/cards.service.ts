import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateCardDto } from './dto/create-card.dto';
import { UpdateCardDto } from './dto/update-card.dto';
import { Card } from './entities/card.entity';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class CardsService {
  constructor(@InjectModel(Card) private cardRepository: typeof Card) {}

  async create(createCardDto: CreateCardDto) {
    try {
      const card = await this.cardRepository.create(createCardDto);
      if (!card) {
        return new HttpException(
          'Не удалось создать карточку',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
      return card;
    } catch (error) {
      return new HttpException(
        'Не удалось создать карточку',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findAll() {
    try {
      const cards = await this.cardRepository.findAll();
      if (!cards) {
        return new HttpException(
          'Не удалось получить карточки',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
      return cards;
    } catch (error) {
      return new HttpException(
        'Не удалось получить карточки',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} card`;
  }

  update(id: number, updateCardDto: UpdateCardDto) {
    return `This action updates a #${id} card`;
  }

  remove(id: number) {
    return `This action removes a #${id} card`;
  }
}
