import { MigrationInterface, QueryRunner } from "typeorm";

export class IsAverage1738139982073 implements MigrationInterface {
    name = 'IsAverage1738139982073'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "grades" ADD "is_average" boolean NOT NULL DEFAULT false`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "grades" DROP COLUMN "is_average"`);
    }

}
