import { Comments } from 'src/comments/entities/comments.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity('Article')
export class Article {
  @PrimaryGeneratedColumn()
  article_id: number;

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
  
  @OneToMany(() => Comments, (comment) => comment.article)
  comments: Comments[];
}
