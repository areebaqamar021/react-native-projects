import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from '../entities/product.entity';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  findAll() {
    return this.productService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.productService.findOne(id);
  }

  @Post()
  create(@Body() product: Partial<Product>) {
    console.log("hello")
    return this.productService.create(product);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.productService.remove(id);
  }
}
