import { Controller, Get } from '@nestjs/common';
import { GradesService } from './grades.service';

@Controller('grades')
export class GradesController {
    constructor(private readonly gradesService: GradesService) {}

    @Get()
    async get() {
        return this.gradesService.getGrades();
    }
}