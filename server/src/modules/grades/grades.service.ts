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

    async updateGrade(id: string, { name, weight, value }) {
        const grade = await this.gradesRepository.findOneBy({ id });

        if (grade.value === value)
            return this.gradesRepository.update(id, { name, weight });

        let parentGrades = await this.gradesRepository.findAncestorsTree(grade, {
            relations: ['children']
        });

        let previousGrade;
        while (parentGrades) {
            if (parentGrades.children) {
                let weights = 0, weightedValues = 0;

                for (const childGrade of parentGrades.children) {
                    weights += childGrade.weight;
                    
                    weightedValues += childGrade.weight * (
                        childGrade.id === previousGrade.id ?
                        previousGrade.value : 
                        childGrade.value
                    );
                }

                parentGrades.value = weights === 0 ? 0 : weightedValues / weights;
            } else {
                parentGrades.name = name;
                parentGrades.weight = weight;
                parentGrades.value = value;
            }

            await this.gradesRepository.save(parentGrades);
            previousGrade = parentGrades;
            parentGrades = parentGrades.parent;
        }

        return id;
    }
}