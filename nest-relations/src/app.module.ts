import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Profile } from './entities/profile.entity';
import { Order } from './entities/order.entity';
import { Product } from './entities/product.entity';
import { Category } from './entities/category.entity';
import { UserModule } from './user/user.module';
import { ProfileModule } from './profile/profile.module';
import { ProductModule } from './product/product.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'ecommerce',
      entities: [User, Profile, Order, Product, Category],
      synchronize: true, // Set to false in production
    }),
    TypeOrmModule.forFeature([User, Profile, Order, Product, Category]),
    UserModule,
    ProfileModule,
    ProductModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
