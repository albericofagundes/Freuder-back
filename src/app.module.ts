import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { OrganizationsModule } from './organizations/organizations.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'freuder',
      password: 'freuder',
      database: 'freuder_db',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],  // Carrega todas as entidades
      synchronize: true,  // Cria tabelas automaticamente (só pra dev)
    }),
    UsersModule,
    OrganizationsModule,
  ],
})
export class AppModule {}