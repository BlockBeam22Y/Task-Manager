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
        return this.reportsRepository.findOne({
            where: { id },
            relations: {
                courses: true
            }
        });
    }

    async createReport(name: string) {
        const users = await this.usersRepository.find();

        const report = this.reportsRepository.create({
            name,
            user: users.at(0)
        });

        await this.reportsRepository.save(report);

        return this.reportsRepository.find();
    }
}