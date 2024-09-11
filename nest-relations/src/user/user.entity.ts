import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import { UserProfile } from '../user-profile/user-profile.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  username: string;

  @OneToOne(() => UserProfile, profile => profile.user, { cascade: true })
  @JoinColumn()
  profile: UserProfile;
}
