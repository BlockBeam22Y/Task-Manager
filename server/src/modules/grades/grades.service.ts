import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Grade } from './grades.entity';
import { Repository } from 'typeorm';

@Injectable()
export class GradesService {
    constructor(@InjectRepository(Grade) private readonly gradesRepository: Repository<Grade>) {}

    async getGrades() {
        return this.gradesRepository.find();
    }
}