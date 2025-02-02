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
        const parentGrade = await this.gradesRepository.findOne({
            where: {
                id: parentId
            },
            relations: {
                children: true
            }
        });

        const grade = this.gradesRepository.create({
            name,
            weight,
            value: 0,
            isAverage,
            order: parentGrade.children.length,
            parent: parentGrade,
            children: []
        })

        await this.gradesRepository.save(grade);
        await this.updateGrade(grade.id, grade);

        return grade;
    }

    async updateGrade(id: string, { name, weight, value }) {
        const grade = await this.gradesRepository.findOneBy({ id });

        let parentGrades = await this.gradesRepository.findAncestorsTree(grade, {
            relations: ['children']
        });

        let previousGrade;
        while (parentGrades) {
            if (parentGrades.children) {
                let weights = 0, weightedValues = 0;

                for (const childGrade of parentGrades.children) {
                    weights += childGrade.id === previousGrade.id ? previousGrade.weight : childGrade.weight;
                    
                    weightedValues += (
                        childGrade.id === previousGrade.id ?
                        previousGrade.weight * previousGrade.value : 
                        childGrade.weight * childGrade.value
                    );
                }

                parentGrades.value = weights === 0 ? 0 : (
                    parentGrades.parent ? 
                    Math.floor(1000 * weightedValues / weights) / 1000 : 
                    Math.floor(10 * weightedValues / weights) / 10
                );
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