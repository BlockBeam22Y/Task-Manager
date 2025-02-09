import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Report } from '../reports/reports.entity';
import { Grade } from '../grades/grades.entity';

@Entity('courses')
export class Course {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({
        length: 8,
        unique: true
    })
    code: string;

    @Column({
        length: 50
    })
    name: string;

    @Column('integer')
    credits: number;

    @Column('integer')
    order: number;

    @ManyToOne(() => Report, (report) => report.courses)
    @JoinColumn({
        name: 'report_id'
    })
    report: Report;
    
    @OneToMany(() => Grade, (grade) => grade.course)
    grades: Grade[];
}