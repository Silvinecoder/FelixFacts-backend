import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ObjectIdColumn,
  OneToOne,
} from "typeorm";
import { ObjectId } from "mongodb";
import { User } from "./User";

@Entity({ name: "character" })
export class Character {
  @ObjectIdColumn()
  _id: ObjectId;

  @Column()
  userId: ObjectId;

  @OneToOne(() => User)
  user?: User;

  @Column()
  name: string;

  @Column()
  race: string;

  @Column()
  birthSign: string;

  @Column()
  pickedClass: string;

  @Column()
  level: number;

  @Column()
  xp: number;

  @Column()
  mood: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  constructor(
    _id: ObjectId,
    userId: ObjectId,
    name: string,
    race: string,
    birthSign: string,
    pickedClass: string,
    level: number,
    xp: number,
    mood: string,
    createdAt: Date,
    updatedAt: Date
  ) {
    this._id = _id;
    this.userId = userId;
    this.name = name;
    this.race = race;
    this.birthSign = birthSign;
    this.pickedClass = pickedClass;
    this.level = level;
    this.xp = xp;
    this.mood = mood;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}
