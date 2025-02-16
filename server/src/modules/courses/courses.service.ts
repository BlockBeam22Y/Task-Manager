import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Course } from './courses.entity';
import { Repository, TreeRepository } from 'typeorm';
import { Report } from '../reports/reports.entity';
import { Grade } from '../grades/grades.entity';

@Injectable()
export class CoursesService {
    constructor(
        @InjectRepository(Course) private readonly coursesRepository: Repository<Course>,
        @InjectRepository(Report) private readonly reportsRepository: Repository<Report>,
        @InjectRepository(Grade) private readonly gradesRepository: TreeRepository<Grade>
    ) {}

    async getCourses() {
        return this.coursesRepository.find();
    }

    async getCourseById(id: string) {
        return this.coursesRepository.findOne({
            where: { id },
            relations: {
                grades: true
            }
        });
    }

    async createCourse({ name, code, credits, reportId }) {
        const report = await this.reportsRepository.findOne({
            where: { id: reportId },
            relations: {
                courses: true
            }
        });

        const course = this.coursesRepository.create({
            name,
            code,
            credits,
            order: report.courses.length,
            report,
        });
        
        await this.coursesRepository.save(course);

        const grade = this.gradesRepository.create({
            name: 'Nota del curso',
            value: 0,
            weight: 1,
            isAverage: true,
            order: 0,
            course
        });

        await this.gradesRepository.save(grade);

        return course;
    }

    async updateCourse(id: string, { name, code, credits }) {
        await this.coursesRepository.update(id, { name, code, credits });

        return id;
    }

    async deleteCourse(id: string) {
        const course = await this.coursesRepository.findOne({
            where: { id },
            relations: {
                report: true
            }
        });

        await this.coursesRepository.remove(course);

        const report = await this.reportsRepository.findOne({
            where: { id: course.report.id },
            relations: {
                courses: true
            }
        });

        for (let i = 0; i < report.courses.length; i++) {
            report.courses[i].order = i;
        }

        await this.reportsRepository.save(report);
        return id;
    }
}