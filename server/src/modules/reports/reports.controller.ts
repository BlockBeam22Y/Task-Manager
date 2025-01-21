import { Body, Controller, Get, Post } from '@nestjs/common';
import { ReportsService } from './reports.service';

@Controller('reports')
export class ReportsController {
    constructor(private readonly reportsService: ReportsService) {}
    
    @Get()
    async get() {
        return this.reportsService.getReports();
    }

    @Post()
    async create(@Body() body) {
        const { name, user_id } = body;

        return this.reportsService.createReport(name, user_id);
    }
}