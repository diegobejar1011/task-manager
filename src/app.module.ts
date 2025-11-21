import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { envsValues } from './core/config/getEnvs';
import { TaskModule } from './task/task.module';
import { UserModule } from './users/user.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: envsValues.db.host,
      port: envsValues.db.port,
      username: envsValues.db.user,
      password: envsValues.db.pass,
      database: envsValues.db.name,
      entities: [__dirname + '/*/infra/**/*.entity{.ts,.js}'],
      synchronize: true
    }),
    TaskModule,
    UserModule,
    AuthModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
