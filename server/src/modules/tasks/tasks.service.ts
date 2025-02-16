import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './tasks.entity';
import { Repository } from 'typeorm';
import { Grade } from '../grades/grades.entity';

@Injectable()
export class TasksService {
    constructor(
        @InjectRepository(Task) private readonly tasksRepository: Repository<Task>,
        @InjectRepository(Grade) private readonly gradesRepository: Repository<Grade>
    ) {}

    async getTasks() {
        return this.tasksRepository.find();
    }
    
    async getTasksByReport(reportId: string) {
        return this.tasksRepository.findBy({
            grade: {
                course: {
                    report: {
                        id: reportId
                    }
                }
            }
        });
    }

    async createTask({ name, description, date, time, gradeId }) {
        const grade = await this.gradesRepository.findOneBy({ id: gradeId });

        const task = this.tasksRepository.create({
            name,
            description,
            date,
            time,
            grade
        });

        await this.tasksRepository.save(task);
        return task.id;
    }
}