import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './tasks.entity';
import { Grade } from '../grades/grades.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([Task, Grade])
    ],
    controllers: [TasksController],
    providers: [TasksService]
})
export class TasksModule {}