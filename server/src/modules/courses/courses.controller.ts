import { Body, Controller, Get, Post } from '@nestjs/common';
import { CoursesService } from './courses.service';

@Controller('courses')
export class CoursesController {
    constructor(private readonly coursesService: CoursesService) {}

    @Get()
    async get() {
        return this.coursesService.getCourses();
    }

    @Post()
    async create(@Body() body) {
        const { name, code, credits, reportId } = body;
        
        return this.coursesService.createCourse({ name, code, credits, reportId });
    }
}