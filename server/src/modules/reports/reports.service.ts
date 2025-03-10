import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Report } from './reports.entity';
import { Repository } from 'typeorm';
import { User } from '../users/users.entity';

@Injectable()
export class ReportsService {
    constructor(
        @InjectRepository(Report) private readonly reportsRepository: Repository<Report>,
        @InjectRepository(User) private readonly usersRepository: Repository<User>
    ) {}

    async getReports() {
        return this.reportsRepository.find();
    }

    async getReportById(id: string) {
        const report = await this.reportsRepository.findOne({
            where: { id },
            relations: {
                courses: {
                    grades: {
                        parent: true
                    }
                }
            }
        });
        
        report.openedAt = new Date();
        await this.reportsRepository.save(report);
        
        for (let i = 0; i < report.courses.length; i++) {
            const { grades, ...course } = report.courses[i];

            for (const grade of grades) {
                if (!grade.parent) {
                    report.courses[i] = {
                        ...course,
                        grades: [grade],
                    };
                }
            }
        }

        return report;
    }

    async createReport(name: string) {
        const users = await this.usersRepository.find();

        const report = this.reportsRepository.create({
            name,
            user: users.at(0),
            openedAt: new Date()
        });

        return this.reportsRepository.save(report);
    }

    async updateReport(id: string, name: string) {
        await this.reportsRepository.update(id, { name });

        return id;
    }

    async deleteReport(id: string) {
        const report = await this.reportsRepository.findOneBy({ id });

        await this.reportsRepository.delete(report);
        return id;
    }
}