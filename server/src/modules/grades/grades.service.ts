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

        return this.gradesRepository.findDescendantsTree(rootGrade, {
            relations: ['parent']
        });
    }

    async createGrade({ name, weight, isAverage, parentId }) {
        const parentGrade = await this.gradesRepository.findOneBy({
            id: parentId
        });

        const grade = this.gradesRepository.create({
            name,
            weight,
            value: 0,
            isAverage,
            parent: parentGrade
        })

        await this.gradesRepository.save(grade);
    }
}