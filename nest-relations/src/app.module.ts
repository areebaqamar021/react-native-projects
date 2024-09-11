import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/user.entity';
import { UserModule } from './user/user.module';
import { UserProfileModule } from './user-profile/user-profile.module';
import { UserProfile } from './user-profile/user-profile.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'ecommerce',
      entities: [User, UserProfile],
      synchronize: true, // Set to false in production
    }),
    TypeOrmModule.forFeature([User, UserProfile]),
    UserModule,
    UserProfileModule,

  ],
  controllers: [],
  
  providers: [],
})
export class AppModule {}
