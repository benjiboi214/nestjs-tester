import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import { UserEntity } from './users/user.entity';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    UsersModule,
    AuthModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'nest_db_test',
      password: 'A^XWX4mX2y2Nbmn29ZAd^%qC34wAJ3',
      database: 'nest_db_test',
      entities: [UserEntity],
      synchronize: true, // Do not use this in production
    }),
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
