import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, Tree, TreeChildren, TreeParent } from 'typeorm';
import { Course } from '../courses/courses.entity';
import { Task } from '../tasks/tasks.entity';

@Entity('grades')
@Tree('closure-table')
export class Grade {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({
        length: 50
    })
    name: string;

    @Column('float')
    value: number;

    @Column('integer')
    weight: number;

    @Column({
        name: 'is_average',
        default: false
    })
    isAverage: boolean;

    @Column('integer')
    order: number;

    @TreeChildren({
        cascade: true
    })
    children?: Grade[];

    @TreeParent()
    parent: Grade;

    @ManyToOne(() => Course, (course) => course.grades)
    @JoinColumn({
        name: 'course_id'
    })
    course: Course;

    @OneToMany(() => Task, (task) => task.grade, {
        cascade: true
    })
    tasks: Task[];
}