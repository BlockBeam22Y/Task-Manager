import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { GradesService } from './grades.service';

@Controller('grades')
export class GradesController {
    constructor(private readonly gradesService: GradesService) {}

    @Get('/:rootId')
    async getByRoot(@Param('rootId') rootId: string) {
        return this.gradesService.getGradesByRoot(rootId);
    }

    @Post()
    async create(@Body() body) {
        const { name, weight, isAverage, parentId } = body;

        return this.gradesService.createGrade({ name, weight, isAverage, parentId });
    }

    @Put('/:id')
    async update(@Param('id') id: string, @Body() body) {
        const { name, value, weight } = body;

        return this.gradesService.updateGrade(id, {
            name,
            value,
            weight
        });
    }
}