import { MigrationInterface, QueryRunner } from "typeorm";

export class CourseOrder1739069391272 implements MigrationInterface {
    name = 'CourseOrder1739069391272'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "courses" ADD "order" integer NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "courses" DROP COLUMN "order"`);
    }

}
