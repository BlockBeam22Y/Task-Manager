import { MigrationInterface, QueryRunner } from "typeorm";

export class CascadeDelete1739080654916 implements MigrationInterface {
    name = 'CascadeDelete1739080654916'

    public async up(queryRunner: QueryRunner): Promise<void> {
        // Crear tablas
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(50) NOT NULL, "email" character varying(100) NOT NULL, "password" character varying NOT NULL, CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "reports" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(50) NOT NULL, "user_id" uuid, CONSTRAINT "PK_d9013193989303580053c0b5ef6" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "courses" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "code" character varying(8) NOT NULL, "name" character varying(50) NOT NULL, "credits" integer NOT NULL, "order" integer NOT NULL, "report_id" uuid, CONSTRAINT "UQ_86b3589486bac01d2903e22471c" UNIQUE ("code"), CONSTRAINT "PK_3f70a487cc718ad8eda4e6d58c9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "grades" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(50) NOT NULL, "value" double precision NOT NULL, "weight" integer NOT NULL, "is_average" boolean NOT NULL DEFAULT false, "order" integer NOT NULL, "parentId" uuid, "course_id" uuid, CONSTRAINT "PK_4740fb6f5df2505a48649f1687b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "tasks" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(50) NOT NULL, "description" character varying(100) NOT NULL, "is_completed" boolean NOT NULL DEFAULT false, "date" date NOT NULL, "time" TIME NOT NULL, "grade_id" uuid, CONSTRAINT "PK_8d12ff38fcc62aaba2cab748772" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "grades_closure" ("id_ancestor" uuid NOT NULL, "id_descendant" uuid NOT NULL, CONSTRAINT "PK_ccb3bbb3e82b9d5ab37c61ced93" PRIMARY KEY ("id_ancestor", "id_descendant"))`);
        await queryRunner.query(`CREATE INDEX "IDX_f0510f3c31e92cb67e6375c9bb" ON "grades_closure" ("id_ancestor") `);
        await queryRunner.query(`CREATE INDEX "IDX_528c761985289d195548ae7520" ON "grades_closure" ("id_descendant") `);

        // Modificar relaciones con ON DELETE CASCADE
        await queryRunner.query(`ALTER TABLE "reports" ADD CONSTRAINT "FK_ca7a21eb95ca4625bd5eaef7e0c" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "courses" ADD CONSTRAINT "FK_dff8a484e213fa804441de95275" FOREIGN KEY ("report_id") REFERENCES "reports"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "grades" ADD CONSTRAINT "FK_670a44072f08b9dadf912b32b29" FOREIGN KEY ("parentId") REFERENCES "grades"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "grades" ADD CONSTRAINT "FK_9a927cab52e881e0aa78f8a181b" FOREIGN KEY ("course_id") REFERENCES "courses"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "tasks" ADD CONSTRAINT "FK_2aa1797743af2b1dd7965a5d7dc" FOREIGN KEY ("grade_id") REFERENCES "grades"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "grades_closure" ADD CONSTRAINT "FK_f0510f3c31e92cb67e6375c9bbb" FOREIGN KEY ("id_ancestor") REFERENCES "grades"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "grades_closure" ADD CONSTRAINT "FK_528c761985289d195548ae75200" FOREIGN KEY ("id_descendant") REFERENCES "grades"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "grades_closure" DROP CONSTRAINT "FK_528c761985289d195548ae75200"`);
        await queryRunner.query(`ALTER TABLE "grades_closure" DROP CONSTRAINT "FK_f0510f3c31e92cb67e6375c9bbb"`);
        await queryRunner.query(`ALTER TABLE "tasks" DROP CONSTRAINT "FK_2aa1797743af2b1dd7965a5d7dc"`);
        await queryRunner.query(`ALTER TABLE "grades" DROP CONSTRAINT "FK_9a927cab52e881e0aa78f8a181b"`);
        await queryRunner.query(`ALTER TABLE "grades" DROP CONSTRAINT "FK_670a44072f08b9dadf912b32b29"`);
        await queryRunner.query(`ALTER TABLE "courses" DROP CONSTRAINT "FK_dff8a484e213fa804441de95275"`);
        await queryRunner.query(`ALTER TABLE "reports" DROP CONSTRAINT "FK_ca7a21eb95ca4625bd5eaef7e0c"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_528c761985289d195548ae7520"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_f0510f3c31e92cb67e6375c9bb"`);
        await queryRunner.query(`DROP TABLE "grades_closure"`);
        await queryRunner.query(`DROP TABLE "tasks"`);
        await queryRunner.query(`DROP TABLE "grades"`);
        await queryRunner.query(`DROP TABLE "courses"`);
        await queryRunner.query(`DROP TABLE "reports"`);
        await queryRunner.query(`DROP TABLE "users"`);
    }
}
