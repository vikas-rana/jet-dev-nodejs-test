import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { Comments } from './comments.entity';

@Entity('Sub_Comments')
export class SubComments {
  @PrimaryGeneratedColumn()
  sub_comment_id: number;

  @ManyToOne(() => Comments)
  @JoinColumn({ name: 'comment_id', referencedColumnName: 'comment_id' })
  comment_id: Comments;

  @Column()
  title: string;

  @Column()
  nick_name: string;

  @Column()
  content: string;

  @Column({ default: true })
  status: boolean;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  creation_date: Date;
}
