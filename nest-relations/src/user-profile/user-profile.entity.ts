import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from 'typeorm';
import { User } from '../user/user.entity';

@Entity()
export class UserProfile {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  bio: string;

  @OneToOne(() => User, user => user.profile)
  user: User;
}
