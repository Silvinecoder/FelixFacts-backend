import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ObjectIdColumn,
  BeforeInsert,
  OneToOne,
  JoinColumn,
} from "typeorm";
import { ObjectId } from "mongodb";
import { hashMyPassword } from "../middleware/authentication/password";

import { Character } from "./Character";

@Entity({ name: "user" })
export class User {
  @ObjectIdColumn()
  _id: ObjectId;

  @Column()
  email: string;

  @Column()
  userName: string;

  @Column()
  password: string;

  @BeforeInsert()
  async hashPassword() {
    this.password = await hashMyPassword(this.password);
  }

  @Column()
  phoneNumber: number;

  @Column()
  gold: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToOne(() => Character)
  @JoinColumn()
  character: Character;

  constructor(
    _id: ObjectId,
    email: string,
    userName: string,
    password: string,
    phoneNumber: number,
    gold: number,
    createdAt: Date,
    updatedAt: Date,
    character: Character
  ) {
    this._id = _id;
    this.email = email;
    this.userName = userName;
    this.password = password;
    this.phoneNumber = phoneNumber;
    this.gold = gold;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.character = character;
  }
}
