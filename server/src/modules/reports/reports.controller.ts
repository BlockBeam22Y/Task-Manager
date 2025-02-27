import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
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

    @Put('/:id')
    async update(@Param('id') id: string, @Body() body) {
        const { name } = body;

        return this.reportsService.updateReport(id, name);
    }

    @Delete('/:id')
    async delete(@Param('id') id: string) {
        return this.reportsService.deleteReport(id);
    }
}