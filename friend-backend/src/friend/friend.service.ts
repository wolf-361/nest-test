import { Injectable } from '@nestjs/common';
import { CreateFriendDto } from './dto/create-friend.dto';
import { UpdateFriendDto } from './dto/update-friend.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Friend } from './entities/friend.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FriendService {
  constructor(
    @InjectRepository(Friend)
    private friendRepository: Repository<Friend>,
  ) { }

  create(createFriendDto: CreateFriendDto) {
    return this.friendRepository.save(createFriendDto);
  }

  findAll() {
    return this.friendRepository.find();
  }

  findOne(id: number) {
    return this.friendRepository.findOne({
      where: {
        id: id
      }
    })
  }

  update(id: number, updateFriendDto: UpdateFriendDto) {
    return this.friendRepository.update(id, updateFriendDto);
  }

  remove(id: number) {
    return this.friendRepository.delete(id);
  }
}
