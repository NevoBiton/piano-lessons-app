import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

export type UserRole = 'teacher' | 'student';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  passwordHash: string;

  @Column({ type: 'varchar' })
  role: UserRole;
}
