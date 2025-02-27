import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { User } from '../../users/entities/user.entity';

@Entity('organizations')
export class Organization {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @Column({ nullable: true })
  telefone: string;

  @Column({ nullable: true })
  parentId: number;

  @OneToMany(() => User, (user) => user.organization)
  users: User[];
}
