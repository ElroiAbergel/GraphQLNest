import { Entity, Column, ObjectIdColumn } from 'typeorm';

@Entity('users')
export class Users {
  @ObjectIdColumn()
  _id: string;
  @Column()
  username: string;
  @Column()
  password: string;
}
