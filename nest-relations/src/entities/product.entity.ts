import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany } from 'typeorm';
import { Category } from './category.entity';
import { Order } from './order.entity';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Category, category => category.products)
  category: Category;

  @Column()
  productName: string;

  @Column('text')
  description: string;

  @Column({ type: 'decimal' })
  price: number;

  @Column({ type: 'int' })
  stockQuantity: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  updatedAt: Date;

  @ManyToMany(() => Order, order => order.products)
  orders: Order[];
}
