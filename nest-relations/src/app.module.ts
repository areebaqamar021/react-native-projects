import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { UserProfileModule } from './user-profile/user-profile.module';
import { CategoryController } from './category/category.controller';
import { CategoryModule } from './category/category.module';
import { ProductService } from './product/product.service';
import { ProductModule } from './product/product.module';
import { StudentModule } from './student/student.module';
import { CourseModule } from './course/course.module';
import { EnrollmentModule } from './enrollment/enrollment.module';

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
    UserModule,
    UserProfileModule,
    CategoryModule,
    ProductModule,
    StudentModule,
    CourseModule,
    EnrollmentModule,
  ],
  controllers: [CategoryController],
  
  providers: [ProductService],
})
export class AppModule {}
