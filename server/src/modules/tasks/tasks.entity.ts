import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Grade } from '../grades/grades.entity';

@Entity('tasks')
export class Task {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({
        length: 50
    })
    name: string;

    @Column({
        length: 100
    })
    description: string;

    @Column({
        name: 'is_completed',
        default: false
    })
    isCompleted: boolean;

    @Column('date')
    date: string;

    @Column('time')
    time: string;

    @ManyToOne(() => Grade, (grade) => grade.tasks, {
        onDelete: 'CASCADE'
    })
    @JoinColumn({
        name: 'grade_id'
    })
    grade: Grade;
}