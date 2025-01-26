import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ReportsService } from './reports.service';

@Controller('reports')
export class ReportsController {
    constructor(private readonly reportsService: ReportsService) {}
    
    @Get()
    async get() {
        return this.reportsService.getReports();
    }

    @Get('/:id')
    async getById(@Param('id') id: string) {
        return this.reportsService.getReportById(id);
    }

    @Post()
    async create(@Body('name') name) {
        return this.reportsService.createReport(name);
    }
}