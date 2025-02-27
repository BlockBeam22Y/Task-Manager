import { registerAs } from '@nestjs/config';
import { db } from './envs';
import { DataSource, DataSourceOptions } from 'typeorm';

const dbConfig = {
    type: 'postgres',
    database: db.database,
    host: db.host,
    port: db.port,
    username: db.username,
    password: db.password,
    autoLoadEntities: true,
    synchronize: true,
    // logging: true,
    // dropSchema: true,
    entities: ['dist/**/*.entity{.ts,.js}'],
    migrations: ['dist/migrations/*{.ts,.js}'],
}

export default registerAs('typeorm', () => dbConfig);

export const AppDataSource = new DataSource(dbConfig as DataSourceOptions);