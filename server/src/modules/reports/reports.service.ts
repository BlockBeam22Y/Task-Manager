import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Report } from './reports.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ReportsService {
    constructor(@InjectRepository(Report) private readonly reportsRepository: Repository<Report>) {}

    async getReports() {
        return this.reportsRepository.find();
    }

    async createReport(name: string, id: string) {
        const report = this.reportsRepository.create({
            name,
            user: { id }
        });

        return this.reportsRepository.save(report);
    }
}