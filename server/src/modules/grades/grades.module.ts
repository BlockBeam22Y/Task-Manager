import { Module } from '@nestjs/common';
import { GradesController } from './grades.controller';
import { GradesService } from './grades.service';

@Module({
    imports: [],
    controllers: [GradesController],
    providers: [GradesService]
})
export class GradesModule {}