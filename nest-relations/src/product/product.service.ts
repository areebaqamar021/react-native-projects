import { Injectable } from '@nestjs/common';
import { CreateProductDto, UpdateProductDto } from './dto/create-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepo: Repository<Product>,
  ) { }
  async create(createProductDto: CreateProductDto) {
    const newProduct = new Product(); //creating a product object to initialize its values
    newProduct.name = createProductDto.name;
    newProduct.description = createProductDto.description;
    newProduct.price = createProductDto.price;
    return await this.productRepo.save(newProduct);
}

findAll(): Promise<Product[]> {
  return this.productRepo.find(); //returning all the products
}
findOne(id: string): Promise<Product> {
  return this.productRepo.findOneBy({ id: id }) //returning a specific product
}
async update(updateProductDto: UpdateProductDto): Promise<string> {
  await this.productRepo.update( updateProductDto.id , updateProductDto); // updating the product
  return "Product updated sucessfullly";
}
remove(id: string): string {
  this.productRepo.delete({ id: id }); //deleting the product
  return "Product deleted successfully";
}
}
