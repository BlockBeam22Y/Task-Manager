import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Grade } from './grades.entity';
import { TreeRepository } from 'typeorm';

@Injectable()
export class GradesService {
    constructor(@InjectRepository(Grade) private readonly gradesRepository: TreeRepository<Grade>) {}

    async getGradesByRoot(rootId: string) {
        const rootGrade = await this.gradesRepository.findOneBy({
            id: rootId
        });

        return this.gradesRepository.findDescendantsTree(rootGrade);
    }
}