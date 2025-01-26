import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './users.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
    constructor(@InjectRepository(User) private readonly usersRepository: Repository<User>) {}

    async getUsers() {
        return this.usersRepository.find({
            relations: {
                reports: true
            }
        });
    }

    async createUser(name: string, email: string, password: string) {
        const user = this.usersRepository.create({
            name,
            email,
            password
        })

        return this.usersRepository.save(user);
    }
}