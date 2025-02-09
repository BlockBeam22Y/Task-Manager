import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
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

    @Put('/:id')
    async update(@Param('id') id: string, @Body() body) {
        const { name, code, credits } = body;

        return this.coursesService.updateCourse(id, { name, code, credits });
    }

    @Delete('/:id')
    async delete(@Param('id') id: string) {
        return this.coursesService.deleteCourse(id);
    }
}