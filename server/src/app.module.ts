import { Module } from '@nestjs/common';
import { UsersModule } from './modules/users/users.module';
import { ReportsModule } from './modules/reports/reports.module';
import { CoursesModule } from './modules/courses/courses.module';
import { GradesModule } from './modules/grades/grades.module';
import { TasksModule } from './modules/tasks/tasks.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import dbConfig from './config/typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [dbConfig]
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configSevice: ConfigService) => {
        return configSevice.get('typeorm');
      }
    }),
    UsersModule,
    ReportsModule,
    CoursesModule,
    GradesModule,
    TasksModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
