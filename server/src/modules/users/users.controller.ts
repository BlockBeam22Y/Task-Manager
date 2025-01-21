import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get()
    async get() {
        return this.usersService.getUsers();
    }

    @Post()
    async create(@Body() body) {
        const { name, email, password } = body;

        return this.usersService.createUser(name, email, password);
    }
}