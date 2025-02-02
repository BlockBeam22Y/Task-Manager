import { MigrationInterface, QueryRunner } from "typeorm";

export class GradeOrder1738481407276 implements MigrationInterface {
    name = 'GradeOrder1738481407276'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "grades" ADD "order" integer NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "grades" DROP COLUMN "order"`);
    }

}
