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
    async create(@Body('name') name) {
        return this.reportsService.createReport(name);
    }
}