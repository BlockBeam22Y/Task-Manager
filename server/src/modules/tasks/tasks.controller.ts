import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
    constructor(private readonly tasksService: TasksService) {}

    @Get()
    async get() {
        return this.tasksService.getTasks();
    }

    @Get('/:reportId')
    async getByReport(@Param('reportId') reportId: string) {
        return this.tasksService.getTasksByReport(reportId);
    }
    
    @Post()
    async create(@Body() body) {
        const { name, description, date, time, gradeId } = body;

        return this.tasksService.createTask({ name, description, date, time, gradeId });
    }
}