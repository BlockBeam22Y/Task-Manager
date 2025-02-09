import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Grade } from './grades.entity';
import { TreeRepository } from 'typeorm';

@Injectable()
export class GradesService {
    constructor(@InjectRepository(Grade) private readonly gradesRepository: TreeRepository<Grade>) {}

    async getGradeById(id: string) {
        return this.gradesRepository.findOne({
            where: { id },
            relations: {
                parent: true,
                children: true
            }
        });
    }

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
                children: true,
                course: true
            }
        });

        const grade = this.gradesRepository.create({
            name,
            weight,
            value: 0,
            isAverage,
            order: parentGrade.children.length,
            parent: parentGrade,
            children: [],
            course: parentGrade.course
        })

        await this.gradesRepository.save(grade);
        await this.updateGrade(grade.id, grade);

        return grade;
    }

    async updateGrade(id: string, { name, weight, value }) {
        const grade = await this.gradesRepository.findOneBy({ id });

        let currentGrade = await this.gradesRepository.findAncestorsTree(grade, {
            relations: ['children']
        });

        let previousGrade = null, children = null;
        while (true) {
            if (children) {
                let weights = 0, weightedValues = 0;

                for (const childGrade of children) {
                    weights += childGrade.id === previousGrade.id ? previousGrade.weight : childGrade.weight;
                    
                    weightedValues += (
                        childGrade.id === previousGrade.id ?
                        previousGrade.weight * previousGrade.value : 
                        childGrade.weight * childGrade.value
                    );
                }

                currentGrade.value = weights === 0 ? 0 : (
                    currentGrade.parent ? 
                    Math.floor(1000 * weightedValues / weights) / 1000 : 
                    Math.floor(10 * weightedValues / weights) / 10
                );
            } else {
                currentGrade.name = name;
                currentGrade.weight = weight;
                currentGrade.value = value;
            }

            await this.gradesRepository.save(currentGrade);

            if (!currentGrade.parent)
                break;

            previousGrade = currentGrade;
            ({ children, ...currentGrade } = currentGrade.parent);
        }

        return id;
    }

    async deleteGrade(id: string) {
        const grade = await this.gradesRepository.findOne({
            where: { id },
            relations: {
                parent: true
            }
        });

        await this.updateGrade(grade.id, { ...grade, weight: 0 });
        await this.gradesRepository.remove(grade);

        const parentGrade = await this.gradesRepository.findOne({
            where: { id: grade.parent.id },
            relations: {
                children: true
            }
        });

        for (let i = 0; i < parentGrade.children.length; i++) {
            parentGrade.children[i].order = i;
        }
        
        await this.gradesRepository.save(parentGrade);
        return id;
    }
}