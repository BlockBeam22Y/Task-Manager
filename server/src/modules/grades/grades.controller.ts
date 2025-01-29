import { Body, Controller, Get, Param, Post } from '@nestjs/common';
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
}