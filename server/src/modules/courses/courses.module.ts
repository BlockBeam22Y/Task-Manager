import { Module } from '@nestjs/common';
import { CoursesController } from './courses.controller';
import { CoursesService } from './courses.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Course } from './courses.entity';
import { Report } from '../reports/reports.entity';
import { Grade } from '../grades/grades.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([Course, Report, Grade])
    ],
    controllers: [CoursesController],
    providers: [CoursesService]
})
export class CoursesModule {}