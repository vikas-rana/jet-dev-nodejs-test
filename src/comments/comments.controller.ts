import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CommentsService } from './comments.service';

@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @Post('add')
  public async addComment(@Body() createCommentDto: any) {
    return await this.commentsService.addComment(createCommentDto);
  }
  @Post('comment-on-comment')
  public async commentOnComment(@Body() data: any) {
    return await this.commentsService.commentOnComment(data);
  }

  @Get('find-by-article/:id')
  public async findByArticleId(@Param('id') id: number) {
    return this.commentsService.findByArticleId(id);
  }
}
