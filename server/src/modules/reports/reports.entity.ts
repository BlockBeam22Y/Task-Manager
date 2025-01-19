import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../users/users.entity';
import { Course } from '../courses/courses.entity';

@Entity('reports')
export class Report {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({
        length: 50
    })
    name: string;

    @ManyToOne(() => User, (user) => user.reports)
    @JoinColumn({
        name: 'user_id'
    })
    user: User;

    @OneToMany(() => Course, (course) => course.report)
    courses: Course[];
}