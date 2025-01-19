import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Course } from './courses.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CoursesService {
    constructor(@InjectRepository(Course) private readonly coursesRepository: Repository<Course>) {}

    async getCourses() {
        return this.coursesRepository.find();
    }
}