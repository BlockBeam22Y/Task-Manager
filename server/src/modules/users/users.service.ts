import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './users.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
    constructor(@InjectRepository(User) private readonly usersRepository: Repository<User>) {}

    async getUsers() {
        return this.usersRepository.find();
    }
}