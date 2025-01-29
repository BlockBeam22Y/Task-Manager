import { Controller, Get, Param } from '@nestjs/common';
import { GradesService } from './grades.service';

@Controller('grades')
export class GradesController {
    constructor(private readonly gradesService: GradesService) {}

    @Get('/:rootId')
    async getByRoot(@Param('rootId') rootId: string) {
        return this.gradesService.getGradesByRoot(rootId);
    }
}