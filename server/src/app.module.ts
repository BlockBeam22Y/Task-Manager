import { Module } from '@nestjs/common';
import { UsersModule } from './modules/users/users.module';
import { ReportsModule } from './modules/reports/reports.module';
import { CoursesModule } from './modules/courses/courses.module';
import { GradesModule } from './modules/grades/grades.module';
import { TasksModule } from './modules/tasks/tasks.module';

@Module({
  imports: [UsersModule, ReportsModule, CoursesModule, GradesModule, TasksModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
