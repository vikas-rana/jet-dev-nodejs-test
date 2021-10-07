import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { CreateArticleDto } from './dto/create.article.dto';

@Controller('articles')
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {}

  @Post('add')
  public async addArticle(@Body() createArticleDto: CreateArticleDto) {
    return await this.articlesService.addArticle(createArticleDto);
  }

  @Get('get-all')
  public async getAllArticles(@Query() query: any) {
    return await this.articlesService.getAllArticles(query.page);
  }

  @Get('get-content/:article_id')
  findContent(@Param('article_id') article_id: number) {
    return this.articlesService.getContent(article_id);
  }
}
