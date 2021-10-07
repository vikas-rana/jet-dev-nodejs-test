import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Comments } from './entities/comments.entity';
import { SubComments } from './entities/sub_comments.entity';

@Injectable()
export class CommentsService {
  constructor(
    @InjectRepository(Comments)
    private readonly commentsRepository: Repository<Comments>,
    @InjectRepository(SubComments)
    private readonly subCommentsRepository: Repository<SubComments>,
  ) {}

  public async addComment(createCommentDto: any): Promise<any> {
    try {
      return await this.commentsRepository.save(createCommentDto);
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  public async findByArticleId(id: any): Promise<any> {
    try {
      return await this.commentsRepository.find({
        where: {
          article: id,
        },
        relations: ['sub_comments'],
      });
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  public async commentOnComment(data: any): Promise<any> {
    try {
      return await this.subCommentsRepository.save(data);
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
