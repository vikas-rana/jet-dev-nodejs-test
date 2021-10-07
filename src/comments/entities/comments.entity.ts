import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
  OneToOne,
  OneToMany,
  ManyToOne,
} from 'typeorm';
import { Article } from '../../articles/entities/articles.entity';
import { SubComments } from './sub_comments.entity';

@Entity('Comments')
export class Comments {
  @PrimaryGeneratedColumn()
  comment_id: number;

  @ManyToOne(() => Article)
  @JoinColumn({ name: 'article_id', referencedColumnName: 'article_id' })
  article: Article;

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

  @OneToMany(() => SubComments, (comment) => comment.comment_id)
  sub_comments: SubComments[];
}
