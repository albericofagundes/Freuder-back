import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Organization } from '../../organizations/entities/organization.entity';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  username: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ nullable: true })
  fullName: string;

  @Column({ nullable: true })
  telefone: string;

  @Column({ default: false })
  isAdmin: boolean;

  @Column({ type: 'decimal', precision: 5, scale: 2, default: 0.0 })
  discountRate: number;

  @Column({
    type: 'enum',
    enum: ['client', 'student', 'provider', 'admin'],
    default: 'client',
  })
  role: string;

  @ManyToOne(() => Organization, (organization) => organization.users)
  organization: Organization; // Liga ao tenant (ex.: IBRAPSI)
}
