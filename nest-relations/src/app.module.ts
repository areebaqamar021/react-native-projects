import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
 

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '', 
      database: 'pharmacy_db', 
      synchronize: true,// Indicates if database schema should be auto created on every start
      autoLoadEntities: true,
      //Logger setings to log error's and warn's in the ORM.      
      logger:'file',
      logging:["error"]
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
