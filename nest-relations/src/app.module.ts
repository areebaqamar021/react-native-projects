import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'ecommerce',
      entities: [
        __dirname + '/**/*.entity{.ts,.js}',  // Glob pattern to include all entities
      ],
      synchronize: true, // Set to false in production
    }),
  ],
})
export class AppModule {}
