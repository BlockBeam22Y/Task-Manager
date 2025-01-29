import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Course } from './courses.entity';
import { Repository } from 'typeorm';
import { Report } from '../reports/reports.entity';
import { Grade } from '../grades/grades.entity';

@Injectable()
export class CoursesService {
    constructor(
        @InjectRepository(Course) private readonly coursesRepository: Repository<Course>,
        @InjectRepository(Report) private readonly reportsRepository: Repository<Report>,
        @InjectRepository(Grade) private readonly gradesRepository: Repository<Grade>
    ) {}

    async getCourses() {
        return this.coursesRepository.find();
    }

    async createCourse({ name, code, credits, reportId }) {
        const report = await this.reportsRepository.findOneBy({
            id: reportId
        });

        const course = this.coursesRepository.create({
            name,
            code,
            credits,
            report,
        });
        
        await this.coursesRepository.save(course);

        const grade = this.gradesRepository.create({
            name: 'Nota del curso',
            value: 0,
            weight: 1,
            isAverage: true,
            course
        });

        await this.gradesRepository.save(grade);

        return course;
    }
}