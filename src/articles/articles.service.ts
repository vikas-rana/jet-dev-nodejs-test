import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Article } from './entities/articles.entity';

@Injectable()
export class ArticlesService {
  constructor(
    @InjectRepository(Article)
    private readonly articlesRepository: Repository<Article>,
  ) {}

  public async addArticle(createArticleDto: any): Promise<any> {
    try {
      return await this.articlesRepository.save(createArticleDto);
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  public async getAllArticles(page: any): Promise<any> {
    try {
      let skip = 0;
      const limit = 20;
      skip = page >= 1 ? (page - 1) * limit : skip;
      const [result, total] = await this.articlesRepository.findAndCount({
        relations: ['comments'],
        take: limit,
        skip: skip,
      });
      return {
        data: result,
        count: total,
      };
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  public async getContent(article_id: number): Promise<any> {
    try {
      return await this.articlesRepository
        .createQueryBuilder('article')
        .where('article.article_id = :article_id', { article_id })
        .select(['article.content', 'article.article_id'])
        .getOne();
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
